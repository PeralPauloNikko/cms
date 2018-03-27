import { Component, OnInit } from '@angular/core';
import { Contact} from "./contacts.model";
import { ContactService} from './contact.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
selectedContact: Contact = null;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactSelectedEvent.subscribe((contact: Contact)=> {
      this.selectedContact = contact;
    });
  }

}
