import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AvisEspace} from "../model/avisEspace";

@Injectable({
  providedIn: 'root'
})

export class avisEspaceService {
  url: string = "http://localhost:3000/avisEspaces";

  constructor(private http: HttpClient) {}

  getList(){
    return this.http.get<AvisEspace[]>(this.url+"/all")
  }
  getListByEspace(idEspace: number){
    return this.http.get<AvisEspace[]>(this.url+"/all/"+idEspace)
  }
  add(AvisEspace:AvisEspace){
    return this.http.post(this.url+"/create", AvisEspace )
  }
  deleteEspace(id:number){
    return this.http.delete(this.url+"/delete/"+id)
  }

  updateEspace(AvisEspace: AvisEspace){
    return this.http.post(this.url+"/update/"+AvisEspace._id, AvisEspace)

  }

}
