import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  breadCrumbTitle: string = "Event";
  constructor() { }

  ngOnInit(): void {
  }

}
