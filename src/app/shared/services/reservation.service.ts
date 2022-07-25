import { Injectable } from '@angular/core';
import {Event} from "../model/event";
import {Espace} from "../model/espace";
import {Reservation} from "../model/reservation";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ReservationService {
  url: string = "http://localhost:3000/reservation/";

  constructor(private http: HttpClient) {}

  //get all events list
  getList(){
    return this.http.get<Reservation[]>(this.url+"/all")
  }

  getUserReservations(){
    return this.http.get<Reservation[]>(this.url+"/user/reservations")
  }

  getReservationById(id: number){
    return this.http.get<Reservation>(this.url+id)
  }

  //add a reservation
  addReservation(reservation:Reservation){
    return this.http.post(this.url+"/add", reservation)
  }

  //delete a reservation
  deleteReservation(id: number){
    return this.http.delete(this.url+"/delete/"+id)
  }


}
