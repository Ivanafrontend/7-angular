import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getPost(): Observable<any> {
    return this.http.get('http://localhost:3000/product');
 }
 addProduct(product) {
  return this.http.post('http://localhost:3000/products', product);

}
}
