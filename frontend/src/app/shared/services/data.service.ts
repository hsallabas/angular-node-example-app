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
  getAllProducts() {
    return this.http.get(`${environment.apiUrl}/v1/products`).pipe(
      map((res) => {
        return res;
      }),
    );
  }
}
