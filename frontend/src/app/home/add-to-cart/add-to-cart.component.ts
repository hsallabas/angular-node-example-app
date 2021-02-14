import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@shared/components/base.component';
import { Product } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UniversalStorage } from '@shared/storage/universal.storage';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent extends BaseComponent implements OnInit {
  quantityFrom: FormGroup;
  selectedProduct: Product;
  cart: Product[];

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(UniversalStorage) private appStorage: Storage,
  ) {
    super();
  }

  ngOnInit(): void {
    this.quantityFrom = this.fb.group({
      quantity: [1, [Validators.pattern('^[0-9]+$')]],
    });

    this.dataService.selectedProduct.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.selectedProduct = res;
    });

    this.dataService.cart.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.cart = res;
    });
  }

  addToCart() {
    if (this.quantityFrom.valid && this.selectedProduct && Number(this.quantityFrom.value.quantity) > 0) {
      const productIndex = this.cart.findIndex(x => x.id === this.selectedProduct.id);
      if (productIndex === -1) {
        const currentUser = this.appStorage.getItem('currentUser');
        const newItem = {
          userID: JSON.parse(currentUser).userID,
          productID: this.selectedProduct.id,
          quantity: Number(this.quantityFrom.value.quantity)
        }
        this.dataService.addNewItemToCart(newItem).toPromise().then(res => {
          if (res && res['data']) {
            this.cart.push({ ...this.selectedProduct, quantity: Number(this.quantityFrom.value.quantity) })
            this.dataService.cart.next(this.cart);
          }
        })
      } else {
        this.snackBar.open('The product was already added to your cart.', 'Ok', {
          duration: 2000,
        });
      }
    }
  }

  increase() {
    this.quantityFrom.patchValue({ quantity: Number(this.quantityFrom.value.quantity) + 1 });
  }

  decrease() {
    if (Number(this.quantityFrom.value.quantity) > 1) {
      this.quantityFrom.patchValue({ quantity: Number(this.quantityFrom.value.quantity) - 1 });
    }
  }
}
