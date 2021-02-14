import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
}
