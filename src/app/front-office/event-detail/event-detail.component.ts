import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../../shared/model/event";
import {EventService} from "../../shared/services/event.service";
import {ReservationService} from "../../shared/services/reservation.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  restPlaces: number =  0;
  reservationSubmitted = false;
  resForm = this.formBuilder.group({
    name: '',
    phone: '',
    id: this.route.snapshot.params['id']
  });
  constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private eventService: EventService, private reservService: ReservationService) {
    this.eventService.getEventById(this.route.snapshot.params['id']).subscribe(
      (result) => {
        this.event = result;
      }
    );

  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.reservService.reserveEvent( this.resForm.value).subscribe();
    this.router.navigate(['/evenements'])
  }

}
