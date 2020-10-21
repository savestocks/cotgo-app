import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletService } from '../api/wallet.service';
import { Wallet } from '../models/wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
})
export class WalletPage implements OnInit {
  public wallet: Wallet = new Wallet();
  constructor(private service: WalletService, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe((it) => {console.warn(it)})
  }
}
