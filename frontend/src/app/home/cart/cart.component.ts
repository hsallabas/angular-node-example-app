import { Component, Inject, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/components/base.component';
import { Product } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent extends BaseComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'type'];
  productList: Product[] = [];

  constructor(
    private dataService: DataService,
    @Inject(UniversalStorage) private appStorage: Storage,
  ) {
    super();
   }

  ngOnInit(): void {
    const currentUser = this.appStorage.getItem('currentUser');
    if (currentUser) {
      this.dataService.getCart({userID: JSON.parse(currentUser).userID}).toPromise().then((res) => {
        if (res && res['data'] && res['data']['Products']) {
          res['data']['Products'].map((product, index) => {
            res['data']['Products'][index]['quantity'] = product['Basket'].quantity;
          })
          this.dataService.cart.next(res['data']['Products']);
        }
      });
    }

    this.dataService.cart.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.productList = [...res];
    })
  }

}
