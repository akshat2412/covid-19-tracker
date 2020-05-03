import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  public get(url: string, options?: any): Observable<any> {
    // const requestOptions = Object.assign({responseType: 'json'}, options);
    return this.http.get(url, options);
  }

  public post(url: string, body: any): Observable<any> {
    return this.http.post(url, body);
  }
}
