import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public _opened = false;
  public _showBackdrop = false;
  public index;
  public year = new Date().getFullYear();
  public items: any[] = [{title: 'GitHub', url: 'https://github.com/justin1291', class: 'mr-auto fa fa-github'}]; // TODO add type

  constructor(private appService: AppService) {
      this.getSidebarState();
  }
  
  _toggleSidebar() {
    this._opened = !this._opened;
    this._showBackdrop = !this._showBackdrop;
    this.appService.toggleSideBarInput(this._opened);
  }

  getSidebarState(): void {
    this.appService.toggleSidebar.subscribe(val => {
      this._opened = val;
      this._showBackdrop = val;
    });
  }

  ngOnInit(): void {
  }


}
