import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) {
    // TODO FEATURE Add in-db check. Not in db receives disclaimer.
    this.modalService.open(DisclaimerComponent);
  }

  ngOnInit() {
  }

}
