import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child4Component } from './child4/child4.component';
import { authGuard } from './auth.guard';


const routes: Routes = [

{path:'', component: Child4Component},
{path: "login", component:Child4Component},
{path: "home", component:Child2Component, canActivate :[authGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
