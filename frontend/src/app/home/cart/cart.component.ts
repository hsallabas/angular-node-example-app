import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';
import { UniversalStorage } from '@shared/storage/universal.storage';


export interface PeriodicElement {
  name: string;
  type: string;
  quantity: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Sample Book', quantity: 1, type: 'Book' },
  { name: 'Sample Game', quantity: 2, type: 'Game' },
  { name: 'Sample Book', quantity: 4, type: 'Book' },
  { name: 'Sample Music', quantity: 3, type: 'Music' },
  { name: 'Sample Music', quantity: 12, type: 'Music' },
  { name: 'Sample Game', quantity: 6, type: 'Game' },
  { name: 'Sample Game', quantity: 9, type: 'Game' },
];


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'type'];
  productList: Product[] = [];

  constructor(
    private dataService: DataService,
    @Inject(UniversalStorage) private appStorage: Storage,
  ) { }

  ngOnInit(): void {
    const currentUser = this.appStorage.getItem('currentUser');
    if (currentUser) {
      this.dataService.getCart({userID: JSON.parse(currentUser).userID}).toPromise().then((res) => {
        if (res && res['data'] && res['data']['Products']) {
          res['data']['Products'].map((product, index) => {
            res['data']['Products'][index]['quantity'] = product['Basket'].quantity;
          })
          this.productList = res['data']['Products'];
        }
      });
    }
  }

}
