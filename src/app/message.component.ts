import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message } from './message';
import { MessageService} from './message.service';


@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})

export class MessageComponent implements OnInit {
  messages: Message[];

  constructor(
    private router: Router,
    private messageService: MessageService) { }

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

  gotoMessage(message: Message): void {
    this.router.navigate(['/message', message._id]);
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
