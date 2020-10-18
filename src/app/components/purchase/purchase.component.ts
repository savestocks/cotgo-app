import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseService } from 'src/app/api/purchase.service';
import { Item } from 'src/app/models/item';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  @Input()
  public item: Item;
  @Output()
  private cancel: EventEmitter<boolean> = new EventEmitter();
  @Output()
  private onSave: EventEmitter<Purchase> = new EventEmitter();
  public entity: Purchase = new Purchase();
  constructor(private service: PurchaseService) { }

  ngOnInit(): void {
  }

  back(){
    this.cancel.emit(true);
  }

  save(){
    this.entity.itemId = this.item.id;

    if(!this.entity.valid()) return;

    this.service.save(this.entity).subscribe((it) => {
      this.onSave.emit(it as Purchase);
    });
  }

  changeMarket(marketId){
    this.entity.marketId = marketId;
  }

}
