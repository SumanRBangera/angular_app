import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.component.html',
  styleUrls: ['./tshirts.component.css']
})
export class TshirtsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(allprod as any).default;
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
}
}