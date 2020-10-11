import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-line',
  templateUrl: './item-line.component.html',
  styleUrls: ['./item-line.component.scss'],
})
export class ItemLineComponent implements OnInit {
  @Input()
  public item;
  constructor() { }

  ngOnInit() {}

}
