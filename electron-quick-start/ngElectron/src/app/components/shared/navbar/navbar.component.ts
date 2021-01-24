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
  client: string = '';
  sells: string = '';
  close: string = '';
  search: string = '';
  sButton: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.electronPv = _.get(MESSAGES, 'NAVBAR.ELECTRON_PV');
    this.product = _.get(MESSAGES, 'NAVBAR.PRODUCTS');
    this.sells = _.get(MESSAGES, 'NAVBAR.SELLS');
    this.client = _.get(MESSAGES, 'NAVBAR.CLIENTS');
    this.close = _.get(MESSAGES, 'NAVBAR.CLOSE');
    this.search = _.get(MESSAGES, 'NAVBAR.SEARCH');
    this.sButton = _.get(MESSAGES, 'NAVBAR.SEARCH_BUTTON');
  }

}
