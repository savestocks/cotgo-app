import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {LocalStorageService} from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  url: string = environment.itemApiUrl;
  endpoint: string = 'item';



  constructor(private http: HttpClient,private storageService: LocalStorageService) { }

  getItems(): Observable<Object> {
    return this.http.get(`${this.url}${this.endpoint}`,this.storageService.getAuthorizationHeader());
  }

}
