import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productdetails = [
    {
      "pid": "100",
      "pname": "Refrigerator",
      "pdescription": "253L Digital Inverter Technology Double Door",
      "status": "In Stock",
      "price": "100000",
      "img":"../../assets/images/cardimg/fridge.jpg"
    },
    {
      "pid": "101",
      "pname": "Bag",
      "pdescription": "253L Digital Inverter Technology Double Door",
      "status": "Out of Stock",
      "price":"2222",
      "img":"../../assets/images/cardimg/bag.jpg"
    },
    {
      "pid": "103",
      "pname": "Headset",
      "pdescription": "Sony WH-CH510 On-Ear Wireless Headphone",
      "status": "In Stock",
      "price": "7777",
      "img":"../../assets/images/cardimg/headset.jpg"
    },
    {
      "pid": "104",
      "pname": "Realme Narzo 50",
      "pdescription": "50MP AI Triple Camera | 120Hz Ultra Smooth Display",
      "status": "Out of Stock",
      "price": "12000",
      "img":"../../assets/images/cardimg/mob.jpg"
    },
    {
      "pid": "105",
      "pname": "Microwave Oven",
      "pdescription": "28L Curd Any Time, Convection Microwave Oven, MC28A5013AK, Ceramic Enamel Cavity with 10 Year warranty",
      "status": "In Stock",
      "price": "25000",
      "img":"../../assets/images/cardimg/oven.jpg"
    },
    {
      "pid": "106",
      "pname": "Plant",
      "pdescription": "Faux Bird of Paradise Plant With White Plastic Pot",
      "status": "In Stock",
      "price": "2000",
      "img":"../../assets/images/cardimg/plant.jpg"
    },
    {
      "pid": "107",
      "pname": "Pot",
      "pdescription": "New Collection Matki 2.75In Height",
      "status": "Out of Stock",
      "price": "1000",
      "img":"../../assets/images/cardimg/pot.jpg"
    },
    {
      "pid": "108",
      "pname": "Table",
      "pdescription": "Children's table, in/outdoor blue",
      "status": "In Stock",
      "price": "4000",
      "img":"../../assets/images/cardimg/table.jpg"
    },
    {
      "pid": "104",
      "pname": "Realme Narzo 50",
      "pdescription": "50MP AI Triple Camera | 120Hz Ultra Smooth Display",
      "status": "Out of Stock",
      "price": "11000",
      "img":"../../assets/images/cardimg/mob.jpg"
    }
  ]




  ngOnInit(): void {
  }

}
