import { Injectable } from '@angular/core';
import {Event} from "../model/event";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EventService {
  url: string = "http://localhost:3000/events/";

  constructor(private http: HttpClient) {}

  //get all events list
  getList(){
    return this.http.get<Event[]>(this.url+"/all")
  }

  getEventById(id: number){
    return this.http.get<Event>(this.url+id)
  }

  //add an event
  addEvent(event:Event){
    return this.http.post(this.url+"/add", event)
  }

  //delete an event
  deleteEvent(id: number){
    return this.http.delete(this.url+"/delete/"+id)
  }

  //update an event
  updateEvent(event: Event){
    return this.http.post(this.url+"/update/"+event._id, event)
  }
}
