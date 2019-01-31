import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from 'angularfire2/storage';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent implements OnInit {

  // for image
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<any>;
  uploadState: Observable<string>;

// for add in table
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

 constructor(public service: ProductService, private afStorage: AngularFireStorage ) {
  }
   // upload image
   upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id); // start reference
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges ().pipe(map(s => s.state)) ;
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.ref.getDownloadURL();
    this.downloadURL.subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log('error');
      }
    );
  }

  ngOnInit() {
  }



  onSubmit() {
     this.product.name = this.name;
     this.product.manufacturer = this.manufacturer;
     this.product.shortDescription = this.shortDescription;
     this.product.fullDescription = this.fullDescription;
    // this.product.categoryId = this.categoryId;
     this.service.addProduct(this.product).subscribe(user => {
    console.log(this.product);


    });
  }
  // onFileSelected(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(event);

  // }
  // onFileChanged(event) {
  //   this.selectedFile = <File>event.target.files[0];
  // }
  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.service.Post('http://localhost:3000/product', fd, { reportProgress: true,
  //     observe : 'events'
  //   }).subscribe(event => {
  //     {console.log(event);
  //     }
  //   });

  // }

}
