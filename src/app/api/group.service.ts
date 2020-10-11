import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  url: string = environment.groupApiUrl;
  endpoint: string = 'group';



  constructor(private http: HttpClient,private storageService: LocalStorageService) { }

  getGroups(): Observable<Object> {
    return this.http.get(`${this.url}${this.endpoint}`,this.storageService.getAuthorizationHeader());
  }
}
