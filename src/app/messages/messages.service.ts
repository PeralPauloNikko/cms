import {Injectable, EventEmitter, Output} from '@angular/core';
import { MOCKMESSAGES } from './message-list/MOCKMESSAGES';
import {Message} from './message.model';
import {Response, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MessagesService {
  jsonUrl: string = 'https://test-eb48c.firebaseio.com/messages.json';
  @Output() messageChangeEvent = new EventEmitter<Message[]>();
  //messageChangeEvent = new EventEmitter<Message[]>();
  selectedMessageEvent = new EventEmitter<Message>();
  messages: Message[] = [];
  maxMsgId: number;

  constructor(private http: Http) {
    this.messages = MOCKMESSAGES;
    this.maxMsgId = this.getMaxId();
    this.initMessages();
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    return this.messages.filter((message: Message) => {
      return message.id === id;
    })[0] || null;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.storeMessages();
    // this.messageChangeEvent.emit(this.messages.slice());
  }

  storeMessages() {
    // put request overwrites data
    this.http.put(this.jsonUrl, JSON.stringify(this.messages))
      .subscribe(() => {
        this.messageChangeEvent.next(this.getMessages());
      });
  }

  addMessages(messages: Message[]) {
    for (let message of messages) {
      this.addMessage(message);
    }
    this.messages.push(...messages);
    this.messageChangeEvent.emit(this.messages.slice());
  }

  initMessages() {
    this.http.get(this.jsonUrl)
    // use the map function
      .map((response: Response) => {
        const messages: Message[] = response.json();
        return messages;
      })

      .subscribe((messages: Message[]) => {
        this.messages = messages;
        this.maxMsgId = this.getMaxId();
        this.messageChangeEvent.next(this.getMessages());
      })
  }
  getMaxId(): number {
    let maxId = 0;
    for (let contact of this.messages){
      let currentId = +contact.id;
      if(currentId > maxId){
        maxId = currentId;
      }
    }
    return maxId;
  }

}




