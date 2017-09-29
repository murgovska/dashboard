import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { PdrComponent } from './pdr/pdr.component';
import { ReportComponent } from './report/report.component';
import { BetsListComponent } from './bets-list/bets-list.component';
import { MessagesComponent } from './messages/messages.component';

import { Tabs } from './tabs';
import { Tab } from './tab';
import { OverviewComponent } from './home/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyAccountComponent,
    PdrComponent,
    ReportComponent,
    BetsListComponent,
    MessagesComponent,
    Tabs, 
    Tab, OverviewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
