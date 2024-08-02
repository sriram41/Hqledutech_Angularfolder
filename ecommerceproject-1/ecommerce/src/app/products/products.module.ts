import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewAllProductsComponent,
    ViewAllProductsByCategoryComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
