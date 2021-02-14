import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  searchFrom: FormGroup

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchFrom = this.fb.group({
      name: ['', [Validators.maxLength(30), , Validators.pattern('^[a-zA-Z]+$')]],
      type: ['']
    });
    this.getProducts();
  }

  getProducts(query?: string) {
    this.dataService.getProducts(query ? `?${query}` : '').toPromise().then((res) => {
      if (res && res['data']) {
        this.products = res['data'];
      }
    })
  }

  search() {
    if (this.searchFrom.valid) {
      const queryString = this.searchFrom.value.name ? `name=${this.searchFrom.value.name}&` : '' 
        + (this.searchFrom.value.type && !!this.searchFrom.value.type ? `type=${this.searchFrom.value.type}` : '')
      this.getProducts(`${queryString}`);
    }
  }
}
