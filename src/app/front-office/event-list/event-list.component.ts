import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Event} from '../../shared/model/event';
import {EventService} from "../../shared/services/event.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  breadCrumbTitle: string = "Event";
  eventList: Event[];


  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getList().subscribe(
      (data: Event[]) => this.eventList = data
    );

  }

}
