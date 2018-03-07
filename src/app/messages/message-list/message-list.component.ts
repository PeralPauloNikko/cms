import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';
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
      'Nikko Peral'),
    new Message('2',
      'Are you serious?',
      ' Its barely Monday, how about Wednesday?',
      'Sarah'),
    new Message('3',
      'Wednesday',
      'Wednesday might work.',
      'Nikko Peral')
  ];
  constructor(private messageService: MessagesService) { }
  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangeEvent
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        }
      );
  }
  onAddMessage(message: Message) {
    this.messages.push(message);
  }
  onSelected(message: Message) {
    this.messageService.selectedMessageEvent.emit(message);
  }
}

