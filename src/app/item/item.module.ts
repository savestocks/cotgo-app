import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPageRoutingModule } from './item-routing.module';

import { ItemPage } from './item.page';
import { FolderPageModule } from '../folder/folder.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    FolderPageModule
  ],
  declarations: [ItemPage],
  exports:[]
})
export class ItemPageModule {}
