import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {

  public toggleSidebar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

    toggleSideBarInput(toggling: boolean) {
    this.toggleSidebar.next(toggling);
  }

}
