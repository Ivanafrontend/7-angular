import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  msg = '';
  name: string;
  parent: string;
  description: string;
  categories: any = [];
  parentCategoryId: 0;
  post: any[];
  category = {
    'name' : '',
    'description' : '',

    'parentCategoryId': 0
  };

  constructor(public service: ServicesService) {
    this.get();
}

  Categories = { name: '', description: '', parentCategoryId: '' };

  ngOnInit() {}

  get() {
    this.service.getPost().subscribe(data => {
      this.post = data;
    });
  }
  onDeleteClick(id) {
      this.service.deleteCategory(id).subscribe(user => {
        this.get();

       });
      }

  // onDeleteClick() {
  //   this.service.deleteCategory(post).subscribe(user => {
  //     const index = this.post.indexOf(post);
  //     this.post.splice(index, 1);



  //   });
  // }

   // add() {
    // this.service.createPost(this.Categories).subscribe( data => {
      // this.categories = data;
   // });
  }
  // update() {
    // this.service.updatePost(this.Categories).subscribe( data => {
      // this.categories = data;
    // });
  // }

//
