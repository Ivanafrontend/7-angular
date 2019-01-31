import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { FormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import { ServicesService } from './services.service';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductService } from './product/product.service';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CommonModule } from '@angular/common';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductComponent,
    TableComponent,
    ShopingListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    HomeComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBdzb24zVKB08K0d1TLLw-c3Yk0xjBtGnY',
      authDomain: 'upload-file-bc9b4.firebaseapp.com',
      databaseURL: 'https://upload-file-bc9b4.firebaseio.com',
      projectId: 'upload-file-bc9b4',
      storageBucket: 'upload-file-bc9b4.appspot.com',
      messagingSenderId: '764413170807'
    }),
    AngularFireStorageModule


  ],
  providers: [ServicesService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
