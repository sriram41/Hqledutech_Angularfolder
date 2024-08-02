import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { HttpClientModule } from '@angular/common/http';
import { DeleteproductComponent } from './products/deleteproduct/deleteproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteFrameworkModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
