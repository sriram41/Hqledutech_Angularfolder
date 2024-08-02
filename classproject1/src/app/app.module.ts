import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { Child1Component } from './child1/child1.component';
import { HttpClientModule } from '@angular/common/http';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';


@NgModule({
  declarations: [
    AppComponent,
    GenderPipe,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
