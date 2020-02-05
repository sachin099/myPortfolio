import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})


export class NavBarComponent implements OnInit {

  condition: boolean;
  @ViewChild('myNav', { static: true }) myNav: any;

  constructor() { }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    if (window.pageYOffset >= 600) {
      this.condition = true;
    }
    else {
      this.condition = false;
    }
  }

  ngOnInit() {
  }

}
