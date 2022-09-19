import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';


import { ShoesComponent } from './shoes/shoes.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MainComponent } from './main/main.component';
import { MaindealsComponent } from './main/maindeals/maindeals.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    HomeComponent,
    ProductsComponent,
   
    ShoesComponent,
    TshirtsComponent,
    AllproductsComponent,
    AdvertisementComponent,
    MainComponent,
    MaindealsComponent,
    CounterComponent,
    CounterchildComponent,
    ContactsComponent

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
