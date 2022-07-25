import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/model/event";
import {EventService} from "../../shared/services/event.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  eventList: Event[];


  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getList().subscribe(
      (data: Event[])=> this.eventList = data
    );
  }

  deleteEvent(id: number, i: number): void {
    this.eventService.deleteEvent(id).subscribe(
      () => this.eventList.splice(i, 1)
    );
  }

}
