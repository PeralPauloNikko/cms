import {Component, Input, OnInit} from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  element: {type: string, name: string, content: string};
@Input() contact: Contact;
  constructor() { }

  ngOnInit() {
    console.log("contact=" + this.contact)
  }

}
