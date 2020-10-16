import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Market } from '../models/market';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  url: string = environment.marketApiUrl;
  endpoint: string = 'market';
  constructor(private http: HttpClient,private storageService: LocalStorageService) { }

  getAll(): Observable<Market[]> {
    return  this.http.get<Market[]>(`${this.url}${this.endpoint}`, this.storageService.getAuthorizationHeader()).pipe(
      catchError(() => {return [] as Market[]})
    ) as Observable<Market[]>; 
  } 

  save(item: Market): Observable<any> {
    return this.http.post(`${this.url}${this.endpoint}`,item, this.storageService.getAuthorizationHeader());
  }
}
