import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  saleData = [
    { name: "Rank1", value: 105000 },
    { name: "Rank2", value: 55000 },
    { name: "Rank3", value: 15000 },
    { name: "Rank4", value: 150000 },
    { name: "Rank5", value: 20000 }
  ];


  constructor() { }

  ngOnInit() {
  }



}
