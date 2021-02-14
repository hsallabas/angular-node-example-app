import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedProduct = new BehaviorSubject<any>('');

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * get All products
   */
  getProducts(query?: string) {
    return this.http.get(`${environment.apiUrl}/v1/products${query ? query : ''}`).pipe(
      map((res) => {
        return res;
      }),
    );
  }

  /**
 * get All products
 */
  getCart(data) {
    return this.http.post(`${environment.apiUrl}/v1/cart`, data).pipe(
      map((res) => {
        return res;
      }),
    );
  }
}
