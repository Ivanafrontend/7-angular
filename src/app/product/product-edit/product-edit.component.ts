import { Component, OnInit } from '@angular/core';

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
  product = {
    'name' : '',
    'manufacturer' : '',
    'shortDescription' : '',
    'fullDescription' : '',
    'categoryId': 0,
  };

  constructor(public service: ProductService) { }

  ngOnInit() {
  }

  onSubmit() {}

}
