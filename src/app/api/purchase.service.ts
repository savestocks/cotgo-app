import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Purchase } from '../models/purchase';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  url: string = environment.purchaseApiUrl;
  endpoint: string = 'purchase';
  constructor(private http: HttpClient,private storageService: LocalStorageService) { }

  getAll(itemId: string): Observable<Purchase[]> {
    return  this.http.get<Purchase[]>(`${this.url}${this.endpoint}/${itemId}`, this.storageService.getAuthorizationHeader()).pipe(
      catchError(this.handleError<Purchase[]>('getPurchase',[]))
    ) as Observable<Purchase[]>; 
  } 

  save(item: Purchase) {
    return this.http.post(`${this.url}${this.endpoint}`,item, this.storageService.getAuthorizationHeader());
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
  
      return of(result as T);
    };
  }
}
