import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GroupService } from 'src/app/api/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  @Output() 
  private changed: EventEmitter<any> = new EventEmitter();
  private groups =[];
  constructor(private service: GroupService) { }

  ngOnInit() {
    this.service.getGroups().subscribe((data: any)=> {
      this.groups = data;
    });    
  }
  onChange(event: any){
    this.changed.emit(event.target.value);
  }

}
