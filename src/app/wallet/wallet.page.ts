import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from '../api/wallet.service';
import { Expense } from '../models/expense';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
})
export class WalletPage implements OnInit {
  public expenses: Expense[];
  constructor(private service: WalletService, private router: Router) { }
  
  ngOnInit() {
    this.service.getExpenses().subscribe((data) => {this.expenses = data});
  }
}
