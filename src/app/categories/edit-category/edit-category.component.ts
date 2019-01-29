import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  //  category:any[];
   message: string;
  id: any;
  private sub: any;
  editCategory: any[];
  name: string;
  parent: number;
  categories: any = [];
  parentCategoryId: 0;
  post: any = [];
  dataService: any;
  parents: [];
  category = {
    'name': '',
    'parentCategoryId': 0,
    'parentCategoryName': '',
   'description': ''
  };
  parid: any = {};

  constructor(public service: ServicesService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe(params => {
      console.log(params);
      this.id = params.id;
    });
    this.get();
  }


  get() {
    this.service.getPost().subscribe(data => {
      this.parents = data;
      this.post = data[this.id];
      console.log(this.post);
      this.getOldVal();
    });
  }

  getOldVal() {
    this.name = this.post.name;
    this.parid = this.post;
  }


  getNewVal() {
    this.category.name = this.name;
    this.category.parentCategoryId = this.parid.id;
    this.category.parentCategoryName = this.name;
    this.category.description = this.message;
    this.service.editCategory(this.category, parseInt(this.post.id)).subscribe();
  }
}
