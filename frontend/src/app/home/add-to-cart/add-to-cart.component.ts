import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@shared/components/base.component';
import { Product } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent extends BaseComponent implements OnInit {
  quantityFrom: FormGroup;
  selectedProduct: Product;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
  ) { 
    super();
  }

  ngOnInit(): void {
    this.quantityFrom = this.fb.group({
      quantity: [1, [Validators.pattern('^[0-9]+$')]],
    });
    this.dataService.selectedProduct.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.selectedProduct = res;
      console.log(res);
    })
  }

  addToCart() {
    if (this.quantityFrom.valid && this.selectedProduct && Number(this.quantityFrom.value.quantity) > 1) {
      this.dataService.selectedProduct.next({...this.selectedProduct, quantity: Number(this.quantityFrom.value.quantity)});
    }
  }

  increase() {
    this.quantityFrom.patchValue({ quantity: Number(this.quantityFrom.value.quantity) + 1});
  }

  decrease() {
    if (Number(this.quantityFrom.value.quantity) > 1) {
      this.quantityFrom.patchValue({ quantity: Number(this.quantityFrom.value.quantity) - 1});
    }
  }
}
