
import { Injectable , EventEmitter} from '@angular/core';
import { logService } from "./log.service";



//The class 'ProductService' cannot be created via dependency injection, as it does not have an Angular decorator. This will result in an error at runtime.

// Whenever you are using the one service(logservice) into another service (productservce)
// you have to intimiate to the angular that product service can be injectable


@Injectable({providedIn:'root'})
//@Injectable()
export class ProductService{
  private products:any = [];

  statusEmitter = new EventEmitter<string>();


  constructor(private _logService:logService){
    this.products = [
      {
        Id: 1,
        Name: 'Samsung',
      },
      {
        Id: 2,
        Name: 'Lenovo',
      },
    ];
  }

  getProducts(){
    return this.products;
  }

  addProduct(product:string){
    let ID = this.products.length + 1;
    let obj = { Id : ID , Name :  product};
    this.products.push(obj);
    this.statusEmitter.emit("You have pushed the new value . i.e. .... " + product);
    this._logService.getLog("Hey .... From Product Service :::::: you have entered the " + product );
    return this.products;
  }

  //this._logservice.getLog("you have entered the " + this._productName.nativeElement.value );


}