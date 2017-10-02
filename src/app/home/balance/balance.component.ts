import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {
  search: boolean;
  model: any = {};

  constructor() { }

  ngOnInit() {
    this.search = false;
  }

  searchData(event){
    this.search = true;
  }

}
