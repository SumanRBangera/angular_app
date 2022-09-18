import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MaindealsComponent } from './main/maindeals/maindeals.component';
import { ProductsComponent } from './products/products.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'shoes',component:ShoesComponent},
  {path:'tshirts', component:TshirtsComponent},
  {path:'allp',component:AllproductsComponent},
  {path:'main',component:MainComponent},
  {path:'maindeals', component:MaindealsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
