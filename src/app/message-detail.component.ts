import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Message } from './message';
import { MessageService} from './message.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'message-detail',
  templateUrl: './message-detail.component.html'
})

export class MessageDetailComponent implements OnInit {
  message: Message;
  isTextAreaDisabled: Boolean;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isTextAreaDisabled = true;
    this.route.paramMap
      .switchMap((params: ParamMap) => this.messageService.getMessage(params.get('id')))
      .subscribe(message => {
        this.message = message;
      });
  }

  clickEditUpdate(): void {
    this.isTextAreaDisabled = !this.isTextAreaDisabled;
    if (this.isTextAreaDisabled) {
      this.updateMessage();
    }
  }

  updateMessage(): void {
    this.messageService.update(this.message);
  }
}
