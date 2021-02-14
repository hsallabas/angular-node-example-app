import { Component, OnInit } from '@angular/core';
import { Product, ProductType } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';


const PRODUCT_TYPE: ProductType[] = [
  { id: 1, name: 'Books' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Games' },
];
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'quantity', 'type'];
  dataSource = ELEMENT_DATA;
  products: Product[] = [];
  productTypes = PRODUCT_TYPE;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.dataService.getAllProducts().toPromise().then((res) => {
      if (res && res['data']) {
        this.products = res['data'];
      }
    })
  }
}
