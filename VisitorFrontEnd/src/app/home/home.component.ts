import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeoIpService } from '../util/geo-ip.service';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { ExtAPIGeoIp } from '../util/extAPIGeoIp';
import { GeoIpInfo } from '../util/GeoIpInfo';

@Component({
  selector: 'app-home',
  providers: [GeoIpService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal, private geoIpService: GeoIpService) {
     // TODO FEATURE Add in-db check. Not in db receives disclaimer.
     const modalInstance = this.modalService.open(DisclaimerComponent);
     modalInstance.result.then((result) => {
       if (result === 'ok') {
         this.geoIpService.geoIpInfo().subscribe(res => {
           const visitor = new GeoIpInfo();
           visitor.ipAddress = res.ip;
           visitor.city = res.city;
           visitor.regionName = res.region_name;
           visitor.countryName = res.country_name;
           visitor.latitude = res.latitude;
           visitor.longitude = res.longitude;
           this.geoIpService.setUserIPInfo(visitor);
           this.geoIpService.postGeoIpInfo(visitor).subscribe(postRes => {/* TODO error handling */});
          });
       }
    }, () => {});
  }


  ngOnInit() {
  }

}
