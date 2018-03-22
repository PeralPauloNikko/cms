import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Document} from '../document.model';
import {DocumentsService} from '../documents.service';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];
  subscription: Subscription;

  constructor(private documentService: DocumentsService) {
  }

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentChangedEvent
      .subscribe((documentList: Document[]) => {
          this.documents = documentList;
        }
      );
  }





}
