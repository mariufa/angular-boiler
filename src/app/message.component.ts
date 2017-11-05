import { Component, OnInit } from '@angular/core';

import { Message } from './message';
import { MessageService} from './message.service';


@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})

export class MessageComponent implements OnInit {
  messages: Message[];

  constructor(private messageService: MessageService) { }

  getMessages(): void {
    this.messageService
      .getMessages()
      .then(messages => {
        this.messages = messages;
        console.log(this.messages);
      });
  }

  add(text: string): void {
    if (!text) { return; }
    this.messageService.create(text)
      .then(message => {
        this.messages.push(message);
      });
  }

  delete(message: Message): void {
    this.messageService.delete(message._id)
      .then(() => {
        console.log("Deleted: " + message._id);
        this.getMessages();
      });
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
