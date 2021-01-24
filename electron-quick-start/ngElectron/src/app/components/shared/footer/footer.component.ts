import { Component, OnInit } from '@angular/core';
import _ from 'lodash'
import { MESSAGES } from '../../../constants/messages';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  electronPv: string = '';
  myName: string = '';
  year: number;
  constructor() { }

  ngOnInit(): void {
    this.electronPv = _.get(MESSAGES, 'NAVBAR.ELECTRON_PV');
    this.myName = _.get(MESSAGES, 'CONTACT_INFO.MY_NAME');
    this.year = new Date().getFullYear();
  }

}
