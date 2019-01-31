import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Post: any;

  constructor(private http: HttpClient) { }
  getPost(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
 }
 addProduct(product) {
  return this.http.post('http://localhost:3000/products', product);

}
editProduct(product , id) {
  return this.http.put('http://localhost:3000/categories' + '/' + id, product);
}
onUpload(selectedFile) {
  return this.http.post('http://localhost:3000/products', selectedFile);
}


}
