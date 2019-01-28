import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  name: string;
  parid: number;
  message: string;

  categories: any = [];
  parentCategoryId: 0;
  post: any[];
  dataService: any;
  parents: [];
 category = {
   'name' : '',
   'parentCategoryName': '',
   'description': ''

 };
 ngOnInit() {
   this.getParentt();
 }

constructor(public service: ServicesService, public router: Router) {
  }
  onSubmit() {
    this.category.description = this.message;
    this.category.name = this.name;
    this.category.parentCategoryName = this.name;
    this.service.addCategory(this.category).subscribe(user => {
      console.log(this.category);
     this.router.navigate(['/categories']);

    });
  }
  getParentt() {
    this.service.getPost().subscribe(data => {
      this.parents = data ;

    });
  }
}
