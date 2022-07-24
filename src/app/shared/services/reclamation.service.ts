import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Reclamation} from "../model/reclamation";
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  url: string = "http://localhost:3000/reclamation/article";

  constructor(private http: HttpClient) { }
  create(id: String, s: Reclamation){
    return this.http.post(this.url+"/"+id,s);
  }
}