import { Component , OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : []
})
export class AppComponent  implements OnInit{
  title = 'AngularServices-BatchFive';

  constructor(private _productService : ProductService){

  }

  products = []
  ngOnInit(){
    // this is the good code.
     this.products = this._productService.getProducts();
  }
  

  //this is the bad code..
  // products = [
  //   {
  //     Id: 1,
  //     Name: 'Samsung',
  //   },
  //   {
  //     Id: 2,
  //     Name: 'Lenovo',
  //   },
  // ];




}
