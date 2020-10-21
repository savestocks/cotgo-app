import { Component, OnInit } from '@angular/core';
import { WalletService } from '../../api/wallet.service';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.css']
})
export class BudgetCardComponent implements OnInit {

  constructor(private service: WalletService) { }

  ngOnInit(): void {

  }

}
