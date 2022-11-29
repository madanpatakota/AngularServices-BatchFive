import { Component, ElementRef, ViewChild } from '@angular/core';
import { logService } from '../log.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  providers : [logService]
})
export class NewProductComponent {
//Q) So can i give the responbility to the angular for create the reference of the log service? 
  constructor(private _logservice:logService){}

  @ViewChild('productName') _productName:ElementRef<any>;

  //service is class where we are going to implement a common logic
  // for the application.
  evtSubmit(){
    // console.log( "you have entered the " + this._productName.nativeElement.value );
    
    //let service = new logService();
    //service.getLog("you have entered the " + this._productName.nativeElement.value );
    
    this._logservice.getLog("you have entered the " + this._productName.nativeElement.value );

    // you are adding the referece for the logservice . right .
    // So here can angular create the referece for the logservice?


    //service.getLog("new product");

    
    
  }




}
