import { Component, Input, OnInit } from '@angular/core';
import { WalletPosition } from 'src/app/models/walletPosition';
import { WalletService } from '../../api/wallet.service';

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.css']
})
export class BudgetCardComponent implements OnInit {
  @Input()

  public expense;
  public walletPosition: WalletPosition;
  public counterClass='counterOK';
  public counterBaseClass='counter010';
  public counterStyle={top:'100%',height:'0%'};
  public percent = 0;
  public available = '';

  private interval;
  private ratio: number;
  private counter = 0;
  
  constructor(private service: WalletService) {

  }

  ngOnInit(): void {

    this.ratio = Math.floor(this.expense.monthlyBudget/10);
    this.service.getWalletPosition(this.expense.id).subscribe((data)=>{
      this.walletPosition = data;
      this.available = ((this.expense.monthlyBudget - data.total) / 100).toFixed(2);
      this.interval = setInterval(()=>{
        this.process();
      },200);
    });

  }
  ngAfterViewChecked(): void {

  }

  process(): void {
    this.counter = this.counter + this.ratio;
    if(this.counter >= this.walletPosition.total){
      this.counter = this.walletPosition.total;
      clearInterval(this.interval);
    }
    this.percent = Math.floor(this.counter / this.expense.monthlyBudget * 100);
    let top = this.percent > 100 ? 100: this.percent;
    if(top < 25) {
      top = 25;
    }
    this.counterStyle = {top: (100 - top) +  '%', height: top + '%'};
    this.prepareClass();
  }

  prepareClass(): void {
    let clazz = ''
    switch(true){
      case(this.percent < 33):
        clazz='counterOK';
        break;
      case(this.percent < 66):
        clazz='counterWarning';
        break;
      default:
        clazz='counterCritical'
      
    }
    this.counterClass = clazz;
    this.counterBaseClass = this.getImage();
  }

  getImage(): string {
    let clazz;
    switch (true) {
        case (this.percent <= 10):
            clazz = 'counter010'
            break
        case (this.percent <= 30):
            clazz = 'counter1030';
            break
        case (this.percent <= 50):
            clazz = 'counter3050'
            break
        case (this.percent <= 70):
            clazz = 'counter5070';
            break
        case (this.percent <= 90):
            clazz = 'counter7090';
            break
    
        default:
            clazz = 'counter90100';

    }  
    return clazz;  
  }
}
