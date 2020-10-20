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
  constructor(private location:Location,private service: WalletService, private router: Router) { }

  ngOnInit() {
  }
  back(): void {
    this.location.back();
  }

  save()  {
    if(!this.wallet.valid()){
      return 
    }
    this.service.save(this.wallet).subscribe((data) => {
      this.router.navigate(['/folder/Cotação']);
    });
  }

  changeGroup(event) {
    this.wallet.groupId = event;
  }
}
