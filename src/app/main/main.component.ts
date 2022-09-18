import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

   //Input Class Decorator
   @Input()product:any

   ngOnInit(): void {
   }
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
       content='fa fa-plus';
     }
     else{
       content='fa fa-minus';
     }
     return content;
   }
}
