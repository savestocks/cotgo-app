import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemService } from '../api/item.service';
import { Group } from '../models/group';
import { GroupState } from '../reducers/group.reducer';
import { selectedGroup } from '../selector/group.selectors';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private items;
  private filteredItems;
  private selectedItem;
  private groupFilter = "";

  constructor(private activatedRoute: ActivatedRoute,private service: ItemService,
      private localStorageService: LocalStorageService, private router: Router,private store: Store<GroupState>) {

  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.items = [];
    this.load();
    if(!this.localStorageService.get("apikey") ||  !this.localStorageService.get("apisecret")){
      this.router.navigate(['/config'])
    }
  }

  load(){
    this.service.getItems().subscribe((data: any)=> {
      this.items = data;
      this.filterItems();
    });
  }

  groupChanged(id: string){
    this.groupFilter = id;
    this.filterItems();
  }

  filterItems(){
    this.filteredItems = this.items.filter((it) => {
      return !this.groupFilter  || this.groupFilter == it.groupId;
    });
  }

  addPurchase(event){
    this.selectedItem = event;
  }

  cancelPurchase(){
    this.selectedItem = null;
  }

  onSavePurchase(event){
    this.selectedItem = null;
    this.load();
  }

}
