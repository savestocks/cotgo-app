import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ItemLineComponent } from '../components/item-line/item-line.component';
import { GroupComponent } from '../components/group/group.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [FolderPage,ItemLineComponent,GroupComponent],
  exports:[ItemLineComponent,GroupComponent]
})
export class FolderPageModule {}
