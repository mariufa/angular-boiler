import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Basic } from './basic'

@Injectable()
export class BasicService {

  private headers = new Headers({'Content-type': 'application/json'});
  private basicsUrl = 'http://localhost:3000/basics';

  constructor(private http: Http) { }

  getBasics(): Promise<Basic[]> {
    return this.http.get(this.basicsUrl, this.headers)
                .toPromise()
                .then(response => response.json() as Basic)
                .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    return null;
  }

  create(name: string): Promise<Basic> {
    return this.http
      .post(this.basicsUrl, JSON.stringify({name: name}), this.headers)
      .toPromise()
      .then(res => res.json() as Basic)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
