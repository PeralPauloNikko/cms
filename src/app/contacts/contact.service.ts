import { Injectable, Output, EventEmitter} from "@angular/core";
import {Contact} from './contacts.model';
import { MOCKCONTACTS} from "./MOCKCONTACTS";
import {Document} from '../documents/document.model';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChange = new EventEmitter<Contact[]>();

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (let contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }

    return null;
  }

  deleteContact(contact: Contact) {
  if (contact === null){
    return;
  }
  const pos = this.contacts.indexOf(contact);
  if (pos < 0) {
    return;
  }
  this.contacts.splice(pos,1);
  this.contactChange.emit(this.contacts.slice());
  }
}

