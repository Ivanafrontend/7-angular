import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  name: string;
  categories: string;
  manufacturer: string;
  available: boolean;
  shortDescription: string;
  fullDescription: string;
  categoryId: 0;
  products: [];
  private subject: any;
  post: any = [];
  id: any;
  product = {
    'name' : '',
    'manufacturer' : '',
    'shortDescription' : '',
    'fullDescription' : '',
    'categoryId': 0,
  };
  productId: any = {};

  constructor(public service: ProductService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.subject = this.router.data.subscribe(data => {
      console.log(data);
      this.id = data.id;
    });
    this.get();
  }
  get() {
    this.service.getPost().subscribe(data => {
      this.products = data;
      this.post = data[this.id];
      console.log(this.post);
      this.getOldVal();
    });
  }
  getOldVal() {
    this.name = this.post.name;
    this.productId = this.post;
  }
  getNewVal() {
    this.product.name = this.name;
    this.service.editProduct(this.product, parseInt(this.post.id)).subscribe();

}
onSubmit() {

}
}
