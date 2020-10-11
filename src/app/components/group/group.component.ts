import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/api/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  private groups =[];
  constructor(private service: GroupService) { }

  ngOnInit() {
    this.service.getGroups().subscribe((data: any)=> {
      this.groups = data;
    });    
  }

}
