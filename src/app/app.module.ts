import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { EditWithParametarComponent } from './edit-with-parametar/edit-with-parametar.component';
import { HomeComponent } from './home/home.component';

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
    EditWithParametarComponent,
    HomeComponent,
    // BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
