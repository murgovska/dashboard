import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  userModel: any = {};
  model:any = {};
  constructor() { }

  ngOnInit() {
    this.model = {"username":"Kristina", "email":"kristina.murgovska@gmail.com", "contractNumber":"50", "durationDate":"05.12.2018"};
  }

}
