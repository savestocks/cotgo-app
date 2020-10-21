import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  url: string = environment.walletApiUrl;
  endpoint: string = 'walletPosition';
  endpointExpense: string = 'expense';



  constructor(private http: HttpClient,private storageService: LocalStorageService) { }

  getAll(): Observable<Object> {
    return this.http.get(`${this.url}${this.endpoint}/091bd1fcc4d896b125692145ace105cd`,this.storageService.getAuthorizationHeader());
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get(`${this.url}${this.endpointExpense}`,this.storageService.getAuthorizationHeader()).pipe(
      catchError(() => {return [] as Expense[]})
    )  as Observable<Expense[]>;
  }
}
