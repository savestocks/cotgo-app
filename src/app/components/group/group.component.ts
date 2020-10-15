import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectGroup } from 'src/app/actions/group.actions';
import { GroupService } from 'src/app/api/group.service';
import { Group } from 'src/app/models/group';
import { GroupState } from 'src/app/reducers/group.reducer';
import { selectedGroup } from 'src/app/selector/group.selectors';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Input()
  private useAll: boolean = true; 
  @Output() 
  private changed: EventEmitter<any> = new EventEmitter();
  private groups:  Group[];
  private selected: any;

  constructor(private service: GroupService, private store: Store<GroupState>) { 

  }

  ngOnInit() {
    this.service.getGroups().subscribe((data: any)=> {
      this.groups = data as Group[];

      this.store.pipe(select(selectedGroup)).subscribe((it) => {
        if(it && it.id){
          this.selected = it;
        }else{
          this.selected = !this.useAll ? this.groups.length > 0 ? this.groups[0]: "" : "";
          this.emit();
        }
      });

    });    
  }
  onChange(event: any){
    this.store.dispatch(selectGroup(event.target.value));
    this.emit();
  }

  emit(){
    this.changed.emit(this.selected.id);
  }
  
  compare(obj1, obj2) {
    return obj1 && obj2 && obj1.id == obj2.id ;
  }

}
