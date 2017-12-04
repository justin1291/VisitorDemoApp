import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeatMapComponent,
    HomeComponent,
    NotFoundComponent,
    DisclaimerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RoutingModule
  ],
  entryComponents: [DisclaimerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }