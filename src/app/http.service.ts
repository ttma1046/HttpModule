import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService {
  constructor(private http: Http) {}

  get(url: string): Observable<any> {
    return this.http.get(url, options)
                    .map(this.extractData)
                  //.do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data, options)
                    .map(this.extractResult)
                  //.do(data => console.log('server data:', data))  // debug
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.Data || { };
  }

  private extractResult(res: Response) {
    let body = res.json();
    if (body.Success === true) {
      return { 'result': true} || null;
    }
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
