import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';



const routes: Routes = [
  { path: '', component: ProductsComponent },
  {path: 'viewallproducts', component:ViewAllProductsComponent},
  {path: 'viewbycategory/:id', component:ViewAllProductsByCategoryComponent},
  {path: 'viewproduct/:id', component:ViewProductComponent},
  {path: 'deleteproduct/:id', component:DeleteproductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
