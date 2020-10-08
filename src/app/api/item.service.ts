import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): any {
    return [
      {initial:"BTTKG",name:"Batata kg"},
      {initial:"CVUND",name:"Couve Unidade"}
    ]
  }
}
