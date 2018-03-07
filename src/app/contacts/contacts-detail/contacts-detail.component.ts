import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts.model';
import {ContactService} from '../contact.service';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactService: ContactService){ }
  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe()
      }
  }

