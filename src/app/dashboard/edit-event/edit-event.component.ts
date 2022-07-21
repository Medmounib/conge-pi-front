import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    dateStart: new FormControl(''),
    dateEnd: new FormControl(''),
    maxPlacesNumber: new FormControl(''),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
