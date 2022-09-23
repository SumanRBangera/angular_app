import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { ContactsComponent } from './contacts/contacts.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MaindealsComponent } from './main/maindeals/maindeals.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'shoes',component:ShoesComponent},
  {path:'tshirts', component:TshirtsComponent},
  {path:'allp',component:AllproductsComponent},
  {path:'main',component:MainComponent},
  {path:'maindeals', component:MaindealsComponent},
  {path:'contact',component:ContactsComponent},
{path:'pdetail',component:ProductdetailsComponent},
{path:'reg',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'cartitem',component:CartItemsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
