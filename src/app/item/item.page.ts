import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../api/item.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  public item: Item = new Item();
  constructor(private location:Location,private service: ItemService, private router: Router) { }

  ngOnInit() {
  }
  back(): void {
    this.location.back();
  }

  save()  {
    if(!this.item.valid()){
      return 
    }
    this.service.save(this.item).subscribe((data) => {
      this.router.navigate(['/folder/Cotação']);
    });
  }

  changeGroup(event) {
    this.item.groupId = event;
  }
}
