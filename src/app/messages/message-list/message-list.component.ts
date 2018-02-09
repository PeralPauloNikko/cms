import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() selectedMessageEvent = new EventEmitter<Message>();
  messages: Message[] = [
    new Message(
      '1',
      'Hey!',
      'Lets go on a date',
      'Paulo Nikko Peral'),
    new Message('2',
      'Are you serious?',
      ' Its barely Monday, how about Wednesday?',
      'Sarah'),
    new Message('3',
      'Wednesday',
      'Wednesday might work! I love you',
      'Paulo Nikko Peral')
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
  constructor() { }

  ngOnInit() {
  }

}
