import { Injectable } from '@angular/core';
import {Espace} from "../model/espace";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EspaceService {
  url: string = "http://localhost:3000/espaces";

  constructor(private http: HttpClient) {}

  getList(){
    return this.http.get<Espace[]>(this.url+"/all")
  }
  getCoord(){
    return this.http.get<any[]>(this.url+"/Coordinates")
  }

}
