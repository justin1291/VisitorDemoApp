import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  _opened = false;

  constructor(private appService: AppService) {
    this.getSidebarState();
  }
  _toggleSidebar(): void {
    this._opened = !this._opened;
    this.appService.toggleSideBarInput(this._opened);
  }

  getSidebarState(): void {
    this.appService.toggleSidebar.subscribe(val => {
      this._opened = val;
    });
  }

  ngOnInit(): void {
  }

}
