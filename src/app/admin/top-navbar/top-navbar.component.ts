import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.sass'],
})
export class TopNavbarComponent implements OnInit {
  overs = {
    bell: false,
    mail: false
  }
  hasNotifications = true;
  valueSearch: string = '';
  constructor() {}

  ngOnInit(): void {}
}
