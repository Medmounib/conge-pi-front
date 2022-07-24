import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Event} from "../../shared/model/event";
import {EventService} from "../../shared/services/event.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  restPlaces: number =  0;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.eventService.getEventById(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.event = result;
      }
    );

  }

  ngOnInit(): void {

  }

  reserve(id: number){

  }

}
