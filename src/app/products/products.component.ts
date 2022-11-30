import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  @Input('productsInfo') products: any;

  ngOnInit(): void {
    this._productService.statusEmitter.subscribe((updates) => {
      console.log(updates);
    });
  }
}
