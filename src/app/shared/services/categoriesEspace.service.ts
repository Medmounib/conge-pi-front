import { Injectable } from '@angular/core';
import {CategoriesEspace} from "../model/categoriesEspace";
import {HttpClient} from "@angular/common/http";
import {Espace} from "../model/espace";

@Injectable({
  providedIn: 'root'
})

export class CategoriesEspaceService {
  url: string = "http://localhost:3000/categoryEspaces";

  constructor(private http: HttpClient) {}

  getList(){
    return this.http.get<CategoriesEspace[]>(this.url+"/all")
  }
  delete(id:number){
    return this.http.delete(this.url+"/delete/"+id)
  }
  add(categorieEspace: CategoriesEspace){
    return this.http.post(this.url+"/create", categorieEspace )
  }
  updateEspace(categoryEspace: CategoriesEspace) {
    return this.http.post(this.url + "/update/" + categoryEspace._id, categoryEspace)
  }
  getById(id: number){
    return this.http.get<CategoriesEspace>(this.url+"/getById/"+id)
  }
}
