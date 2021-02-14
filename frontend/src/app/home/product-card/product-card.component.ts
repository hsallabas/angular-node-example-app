import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '@shared/components/base.component';
import { Product } from '@shared/models/data.model';
import { DataService } from '@shared/services/data.service';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent extends BaseComponent implements OnInit {

  @Input() product: Product;
  selectedProduct: Product;

  constructor(
    private dataService: DataService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.dataService.selectedProduct.pipe(takeUntil(this.destroyed$)).subscribe(res => {
      this.selectedProduct = res;
    });
  }

  selectProduct() {
    this.dataService.selectedProduct.next(this.product);
  }

}
