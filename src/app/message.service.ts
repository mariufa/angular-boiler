import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';
import { Message } from './message';

@Injectable()
export class MessageService {

  //private headers = new Headers({
  //  'Content-Type': 'application/json',
  //  'Authorization': 'JWT ' + this.authenticationService.token;
  //});
  private headers: Headers
  private messagesUrl = '/api/messages';

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService,
  ) {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'JWT ' + this.authenticationService.token
    });
  }

  getMessages(): Promise<Message[]> {
    return this.http.get(this.messagesUrl, {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Message)
                .catch(this.handleError);
  }

  getMessage(id: String): Promise<Message> {
    const url = `${this.messagesUrl}/${id}`;
    return this.http.get(url, {headers: this.headers})
                .toPromise()
                .then(response => response.json() as Message)
                .catch(this.handleError);
  }

  delete(id: String): Promise<void> {
    const url = `${this.messagesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(text: string): Promise<Message> {
    return this.http
      .post(this.messagesUrl, JSON.stringify({text: text}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message)
      .catch(this.handleError);
  }

  update(message: Message): Promise<Message> {
    const url = `${this.messagesUrl}/${message._id}`;
    return this.http.put(url, JSON.stringify(message), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Message)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
