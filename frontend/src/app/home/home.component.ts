import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product, ProductType } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';
import { take } from 'rxjs/operators';


const PRODUCT_TYPE: ProductType[] = [
  { id: 1, name: 'Books' },
  { id: 2, name: 'Music' },
  { id: 3, name: 'Games' },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
      const queryString = (this.searchFrom.value.name ? `name=${this.searchFrom.value.name}&` : '') 
        + (this.searchFrom.value.type && !!this.searchFrom.value.type ? `type=${this.searchFrom.value.type}` : '')
      this.getProducts(`${queryString}`);
    }
  }
}
