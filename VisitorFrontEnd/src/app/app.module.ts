import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routing';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DataComponent } from './data/data.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    HomeComponent,
    NotFoundComponent,
    DisclaimerComponent,
    DataComponent,
    NavBarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    SidebarModule.forRoot(),
    NgxDatatableModule,
    RoutingModule
  ],
  entryComponents: [DisclaimerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }