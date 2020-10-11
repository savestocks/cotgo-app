import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  private item: any = {};
  constructor(private location:Location) { }

  ngOnInit() {
  }
  back(): void {
    this.location.back();
  }

  save(): void {
    throw "Not implemented yet";
  }
}
