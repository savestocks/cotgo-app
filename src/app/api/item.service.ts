import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = environment.itemApiUrl;
  endpoint: string = 'item';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa('cotgo:cotgo')
    })
  };

  constructor(private http: HttpClient) { }

  getItems(): Observable<Object> {
    return this.http.get(`${this.url}${this.endpoint}`,this.httpOptions);
  }

}
