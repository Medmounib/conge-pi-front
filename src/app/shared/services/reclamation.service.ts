import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Reclamation} from "../model/reclamation";
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  url: string = "http://localhost:3000/reclamation/article";
  url1: string = "http://localhost:3000/reclamation";

  constructor(private http: HttpClient) { }
  create(id: String, s: Reclamation){
    return this.http.post(this.url+"/"+id,s);
  }
  getList(){
    return this.http.get<Reclamation[]>(this.url1);
  }
  update(id: string){
    return this.http.post(this.url1+"/"+id,{treated: true});

  }
}