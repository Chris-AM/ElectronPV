import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MESSAGES } from '../constants/messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  electronPv: string = '';
  product: string = '';
  sells: string = '';
  search: string = '';
  sButton: string = '';

  constructor() { }

  ngOnInit(): void {
    this.electronPv = _.get(MESSAGES, 'NAVBAR.ELECTRON_PV');
    this.product = _.get(MESSAGES, 'NAVBAR.PRODUCTS');
    this.sells = _.get(MESSAGES, 'NAVBAR.SELLS');
    this.search = _.get(MESSAGES, 'NAVBAR.SEARCH');
    this.sButton = _.get(MESSAGES, 'NAVBAR.SEARCH_BUTTON');
  }

}
