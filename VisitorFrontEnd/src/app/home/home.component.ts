import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeoIpService } from '../util/geo-ip.service';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';

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
         this.geoIpService.geoIpInfo().subscribe(res => console.log(res));
       }
    }, () => {});
  }


  ngOnInit() {
  }

}
