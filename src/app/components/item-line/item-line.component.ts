import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-line',
  templateUrl: './item-line.component.html',
  styleUrls: ['./item-line.component.scss'],
})
export class ItemLineComponent implements OnInit {
  @Input()
  public item;
  @Output()
  public onAdd: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  clickAdd() {
    this.onAdd.emit(this.item);
  }

}
