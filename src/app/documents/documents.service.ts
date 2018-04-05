import {EventEmitter, Injectable, OnDestroy, OnInit} from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class DocumentsService implements OnDestroy, OnInit{
  //selectedDocumentEvent = new EventEmitter<Document>();
  selectedDocumentEvent: EventEmitter<Document> = new EventEmitter<Document>();
  //documentChangedEvent = new EventEmitter<Document[]>();
  documentChangedEvent: EventEmitter<Document[]> = new EventEmitter<Document[]>();
  documents: Document[] = [];
  Subject: Document[] = [];
  documentListChangedEvent: Subject<Document[]> = new Subject<Document[]>();
  maxDocumentId: number;
  subscription: Subscription;

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    return this.documents.filter((document: Document) => {
      return document.id === id;
    })[0] || null;
  }
  deleteDocument(document: Document) {
    if (document === null) {
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }
    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }

  getMaxId(): number {
    let maxId: number = 0;

    this.documents.forEach((document: Document) => {
      let currentId: number = Number(document.id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    });
    return maxId;
  }

  addDocument(document: Document) {
    if (document) {
      document.id = String(++this.maxDocumentId);

      this.documents.push(document);
      this.documentListChangedEvent.next(this.getDocuments());
    }
  }

  updateDocument(original: Document, updated: Document) {
    var pos;
    if (original && updated && (pos = this.documents.indexOf(original)) >= 0) {
      updated.id = original.id;
      this.documents[pos] = updated;
      this.documentListChangedEvent.next(this.getDocuments());
    }
  }
  ngOnDestroy(){
    this.documentListChangedEvent.unsubscribe();
  }
  ngOnInit(){
    this.subscription = this.documentListChangedEvent.subscribe();
  }
}
