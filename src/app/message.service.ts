import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { Message } from './message';

@Injectable()
export class MessageService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private messagesUrl = '/api/messages';

  constructor(private http: Http) { }

  getMessages(): Promise<Message[]> {
    return this.http.get(this.messagesUrl)
                .toPromise()
                .then(response => response.json() as Message)
                .catch(this.handleError);
  }

  getMessage(id: String): Promise<Message> {
    const url = `${this.messagesUrl}/${id}`;
    return this.http.get(url)
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

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
