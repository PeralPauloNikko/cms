import { Component, OnInit } from '@angular/core';
import {DocumentsService} from '../documents.service';
import {Params, Router, ActivatedRoute} from '@angular/router';
import {Document} from '../document.model';
import {WindRefService} from '../../wind-ref.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  document: Document;
  nativeWindow: any;
  id: string;
  constructor(private documentService: DocumentsService,
  private route: ActivatedRoute,
              private router: Router,
  private windRefService: WindRefService) {
    this.nativeWindow = windRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
    this.id = params['id'];
    this.document = this.documentService.getDocument(this.id);
    }
    );
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }
  onDelete(){
    this.documentService.deleteDocument(this.document);
  }
}
