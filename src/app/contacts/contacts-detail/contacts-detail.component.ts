import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
@Input() contact: Contact;
contacts: Contact[] = [];
  constructor() { }

  ngOnInit() {
  }

}
