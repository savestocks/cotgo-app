import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MarketService } from 'src/app/api/market.service';
import { Market } from 'src/app/models/market';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  @Output() 
  private changed: EventEmitter<any> = new EventEmitter();
  private markets:  Market[];

  constructor(private service: MarketService) { 

  }

  ngOnInit() {
    this.service.getAll().subscribe((data: any)=> {
      this.markets = data as Market[];
    });    
  }
  onChange(event: any){
    this.changed.emit(event.target.value);
  }
  
  compare(obj1, obj2) {
    return obj1 && obj2 && obj1.id == obj2.id ;
  }

}
