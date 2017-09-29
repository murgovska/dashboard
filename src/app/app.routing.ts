import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PdrComponent } from './pdr/pdr.component';
import { ReportComponent } from './report/report.component';
import { BetsListComponent } from './bets-list/bets-list.component';
import { MessagesComponent } from './messages/messages.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'myaccount', component: MyAccountComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [
      RouterModule
    ],
    providers: [
    ]
  })
  export class RoutingModule { }
