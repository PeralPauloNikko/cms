import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts.model';
import {ContactService} from '../contact.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router){ }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.contact = this.contactService.getContact(params['id']);
    });
      }

  }

