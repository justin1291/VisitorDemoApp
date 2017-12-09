import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { VisitorService } from './visitor.service';
import { GeoIpInfo } from '../util/geoIpInfo';
import { GeoIpService } from '../util/geo-ip.service';

@Component({
  selector: 'app-data',
  providers: [VisitorService],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  // @ViewChild('headerFilter') headerFilter: TemplateRef<any>; headerTemplate: this.headerFilter
  loadingIndicator: boolean;
  rows: GeoIpInfo[] = [];
  columns = [];
  SEVEN_SECONDS_MS = 7000;

  constructor(private visitorService: VisitorService, private geoIpService: GeoIpService) {
    this.geoIpService.currentUserGeoIPObj.subscribe( newVisitor => {
      // call at instantiation, and all detected changes
        this.getAllVisitors();
    });
  }

  private getAllVisitors() {
    this.visitorService.allVisitors().subscribe(response => {
      this.rows = response;
    });
  }

  ngOnInit() {
    this.columns.push(
      {  name : 'City', prop: 'city', width: 150},
      {  name : 'Region (U.S State)', prop: 'regionName', width: 150},
      {  name : 'Country', prop: 'countryName', width: 150},
      {  name : 'Latitude', prop: 'latitude', width: 150},
      {  name : 'Longitude', prop: 'longitude', width: 150},
      {  name : 'Insert Date', prop: 'insertDate', width: 150},
      {  name : 'Update Date', prop: 'updateDate', width: 150},
      {  name : 'Visit Count', prop: 'updateCount', width: 150});
  }

}
