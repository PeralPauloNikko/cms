import {Injectable, EventEmitter} from '@angular/core';
import {Contact} from './contacts.model';
import {MOCKCONTACTS} from './MOCKCONTACTS';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class ContactService {
  contacts: Contact[] = [];
  contactSelectedEvent = new EventEmitter<Contact>();
  contactChange: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();
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
}
