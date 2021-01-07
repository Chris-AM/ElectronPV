import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { MESSAGES } from '../shared/constants/messages';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  electron: string = '';
  contact: string = '';
  madeBy: string = '';
  name: string = '';
  phone1: string = '';
  phone2: string = '';
  mail: string = '';

  constructor() { }

  ngOnInit(): void {
    this.electron = _.get(MESSAGES, 'NAVBAR.ELECTRON_PV');
    this.contact = _.get(MESSAGES, 'CONTACT_INFO.CONTACT');
    this.madeBy = _.get(MESSAGES, 'CONTACT_INFO.MADE_BY');
    this.name = _.get(MESSAGES, 'CONTACT_INFO.MY_NAME');
    this.phone1 = _.get(MESSAGES, 'CONTACT_INFO.PHONE_1');
    this.phone2 = _.get(MESSAGES, 'CONTACT_INFO.PHONE_2');
    this.mail = _.get(MESSAGES, 'CONTACT_INFO.MAIL');
  }

}
