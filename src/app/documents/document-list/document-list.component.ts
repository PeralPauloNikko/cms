import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService} from '../documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  constructor(private documentService: DocumentsService) { }
  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }
  onSelectedDocument(document: Document) {
    this.documentService.selectedDocumentEvent.emit(document);
  }
}
