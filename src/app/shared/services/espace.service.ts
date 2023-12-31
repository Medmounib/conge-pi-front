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
  getListByCategory(idCategory: number){
    return this.http.get<Espace[]>(this.url+"/all/"+idCategory)
  }

  getById(id: number){
    return this.http.get<Espace>(this.url+"/getById/"+id)
  }
  getCoord(){
    return this.http.get<any[]>(this.url+"/Coordinates")
  }

  add(espace:Espace){
    return this.http.post(this.url+"/create", espace )
  }
  deleteEspace(id:number){
    return this.http.delete(this.url+"/delete/"+id)
  }

  updateEspace(espace: Espace){
    return this.http.post(this.url+"/update/"+espace._id, espace)

  }

}
