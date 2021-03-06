import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ItemLineComponent } from '../components/item-line/item-line.component';
import { GroupComponent } from '../components/group/group.component';
import { PurchaseComponent } from '../components/purchase/purchase.component';
import { MarketComponent } from '../components/market/market.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,ItemLineComponent,GroupComponent,PurchaseComponent,MarketComponent],
  exports:[ItemLineComponent,GroupComponent,PurchaseComponent,MarketComponent]
})
export class FolderPageModule {}
