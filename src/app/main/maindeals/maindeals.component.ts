import { Component, OnInit } from '@angular/core';
import * as main from "../main.json";
@Component({
  selector: 'app-maindeals',
  templateUrl: './maindeals.component.html',
  styleUrls: ['./maindeals.component.css']
})
export class MaindealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  all:any=(main as any).default;

}
