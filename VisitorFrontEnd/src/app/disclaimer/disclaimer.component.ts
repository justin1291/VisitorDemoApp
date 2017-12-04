import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent implements OnInit {

  public title = 'Hi vistor,';
  public bodyText = `<div> <p> You're going to have two chooses down at the bottom.</p>
   <p> One choice is to <strong>cancel</strong> and only look at vistor data. </p>
   <p> However, if you were to be so kind, you will click <strong>Ok</strong> and let me send some data about you to my database.
   I promise I won't use the data for any reason, other than to show you as a blimp on a heatmap in this demo.</p>
  </div>`;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
