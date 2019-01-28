import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor( private http: HttpClient ) { }

  getPost(): Observable<any> {
    return this.http.get('http://localhost:3000/categories');
  }
  // createPost(post): Observable<any> {
    // return this.http.post('http://localhost:3000/categories', post);
  // }

  addCategory(category) {
    return this.http.post('http://localhost:3000/categories', category);

  }
  deleteCategory(id) {
    return this.http.delete('http://localhost:3000/categories' + '/' + id);

  }
  editCategory(category , id){
    return this.http.put('http://localhost:3000/categories' + '/' + id, category)
  }
  }
