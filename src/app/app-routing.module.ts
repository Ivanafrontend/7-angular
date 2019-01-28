import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { EditWithParametarComponent } from './edit-with-parametar/edit-with-parametar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
const routes: Routes = [
  { path: 'categories', component: CategoriesComponent},
  { path: 'product', component: ProductComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'Edit/:id', component: EditCategoryComponent },
  { path: 'home', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
