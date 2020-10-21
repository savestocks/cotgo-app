import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';

import { WalletPage } from './wallet.page';
import { FolderPageModule } from '../folder/folder.module';
import { BudgetCardComponent } from '../components/budget-card/budget-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPageRoutingModule,
    FolderPageModule
  ],
  declarations: [WalletPage,BudgetCardComponent],
  exports:[BudgetCardComponent]
})
export class WalletPageModule {}
