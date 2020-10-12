import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGroup } from 'src/app/actions/group.actions';
import { GroupService } from 'src/app/api/group.service';
import { Group } from 'src/app/models/group';
import { GroupState } from 'src/app/reducers/group.reducer';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Output() 
  private changed: EventEmitter<any> = new EventEmitter();
  private groups =[];
  constructor(private service: GroupService, private store: Store<GroupState>) { }

  ngOnInit() {
    this.service.getGroups().subscribe((data: any)=> {
      this.groups = data;
    });    
  }
  onChange(event: any){
    this.store.dispatch(selectGroup({name:"Teste"} as Group));
    console.warn(this.store);
    this.changed.emit(event.target.value);
  }

}
