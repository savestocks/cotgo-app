import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  config: any = {};
  constructor(private location: Location,private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  back(): void {
    this.location.back();
  }

  save(): void {
    if(this.config.key && this.config.secret){
      this.localStorageService.set("apikey",this.config.key);
      this.localStorageService.set("apisecret",this.config.secret);
      this.location.back();
    }
  }
}
