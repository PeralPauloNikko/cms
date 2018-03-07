import { Injectable, EventEmitter } from '@angular/core';
import { MOCKMESSAGES } from './message-list/MOCKMESSAGES';
import {Message} from './message.model';

@Injectable()
export class MessagesService {
  messageChangeEvent = new EventEmitter<Message[]>();
  selectedMessageEvent = new EventEmitter<Message>();
  messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }
  getMessages(): Message[] {
    return this.messages.slice();
  }
  getMessage(id:string): Message {
    for (let message of this.messages) {
      if(message.id === id) {
        return message;
      }
    }
    return null;
  }
  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice());
  }
  addMessages(messages: Message[]) {
    for (let message of messages) {
      this.addMessage(message);
    }
    this.messages.push(...messages);
    this.messageChangeEvent.emit(this.messages.slice());
  }
}






