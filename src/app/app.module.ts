import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { logService } from './log.service';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ logService],
  bootstrap: [AppComponent]
})
export class AppModule { }
