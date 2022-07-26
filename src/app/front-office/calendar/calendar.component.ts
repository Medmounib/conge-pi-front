import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {ReservationService} from "../../shared/services/reservation.service";
import {CategoriesEspace} from "../../shared/model/categoriesEspace";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  list: [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      {
        title: "Mr. Seif",
        date: "2022-08-01 09:00"
      },
      {
        title: "Basti Ichrak",
        date: "2022-08-01 11:00"
      },
      {
        title: "Foulen ben foulen",
        date: "2022-07-27 13:00"
      },
      {
        title: "User test",
        date: "2022-07-26 15:00"
      },
      {
        title: "Reservation événement ",
        date: "2022-07-25 08:00"
      },
    ],
  };

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getUserReservations().subscribe(
      (data) => {
        console.log(data)
      },
    );
  }

}
