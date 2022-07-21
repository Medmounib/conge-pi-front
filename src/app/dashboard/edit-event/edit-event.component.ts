import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../shared/services/event.service";

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  editEvent = new FormGroup({
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    timeStart: new FormControl(''),
    endDate: new FormControl(''),
    timeEnd: new FormControl(''),
    maxPlacesNumber: new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.eventService.getEventById(this.router.snapshot.params['id']).subscribe(
      (result) => {
        console.log(result['dateStart'].toLocaleString('fr-Fr'));
        this.editEvent = new FormGroup({
          title: new FormControl(result.title),
          type: new FormControl(result.type),
          description: new FormControl(result['description']),
          startDate: new FormControl(result['dateStart'].toLocaleString('mm-dd-yyy')),
          timeStart: new FormControl(result['dateStart'].toLocaleString()),
          endDate: new FormControl(result['dateEnd'].toLocaleString()),
          timeEnd: new FormControl(result['dateEnd'].toLocaleString()),
          maxPlacesNumber: new FormControl(result['maxPlacesNumber']),
        });
      }
    );
  }

  collection(){
    // this.eventService.updateEvent()
  }

}
