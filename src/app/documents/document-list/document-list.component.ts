import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  @Input() documents: Document[] = [
    new Document(
      1,
      'Where? What?',
      'confusion',
      'google.com',
      null
    ),
    new Document(
      2,
      'Dictionary',
      'Effort',
      'google..com',
      null
    ),
    new Document(
      3,
      'The Hulk',
      'Marvel',
      'google.com',
      null
    ),
    new Document(
      4,
      'Going',
      'Map',
      'google.com',
      null
    ),
    new Document(
      5,
      'Jack black',
      'Pick of Destiny',
      'google.com',
      null
    )
  ];
  constructor() { }
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
  ngOnInit() {
  }

}
