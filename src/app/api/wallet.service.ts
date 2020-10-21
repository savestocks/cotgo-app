import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Expense } from '../models/expense';
import { WalletPosition } from '../models/walletPosition';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  url: string = environment.walletApiUrl;
  endpoint: string = 'walletPosition';
  endpointExpense: string = 'expense';



  constructor(private http: HttpClient,private storageService: LocalStorageService) { }

  getWalletPosition(id: string): Observable<WalletPosition> {
    return this.http.get(`${this.url}${this.endpoint}/${id}`,this.storageService.getAuthorizationHeader()).pipe(
      catchError(() => {return  WalletPosition})
    ) as Observable<WalletPosition>;
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get(`${this.url}${this.endpointExpense}`,this.storageService.getAuthorizationHeader()).pipe(
      catchError(() => {return [] as Expense[]})
    )  as Observable<Expense[]>;
  }
}
