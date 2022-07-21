import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.event = new Event();
  }

  save() {
    // concat and set event dates
    this.event.dateStart = new Date(this.startDate+" " + this.timeStart);
    this.event.dateEnd = new Date(this.endDate+" " + this.timeEnd);
    this.eventService.addEvent(this.event).subscribe();
    this.router.navigate(['/back-officeevenements'])
  }

}
