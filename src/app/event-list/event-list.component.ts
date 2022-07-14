import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Event } from '../model/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  breadCrumbTitle: string = "Event";
  eventList: Event[];


  constructor() { }

  ngOnInit(): void {
    this.eventList = [
      {
        id:2,
        name: "new event",
        description: "desc here",
        image: "img"
      }
    ];
  }

}
