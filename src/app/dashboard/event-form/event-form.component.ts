import { Component, OnInit } from '@angular/core';
import {Event} from "../../shared/model/event";
import {EventService} from "../../shared/services/event.service";

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  event: Event;
  startDate: string;
  endDate: string;
  timeStart: string;
  timeEnd: string;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = new Event();
  }

  save() {
    // this.event.dateStart = new Date();
    console.log(this.startDate)
    console.log(this.endDate)
    console.log(this.timeEnd)
    console.log(this.timeStart)
    console.log(this.event)
    //this.eventService.addEvent(this.event).subscribe();
  }

}
