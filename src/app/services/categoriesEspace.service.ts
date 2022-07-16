import { Injectable } from '@angular/core';
import {CategoriesEspace} from "../model/categoriesEspace";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class categoriesEspaceService {
  url: string = "http://localhost:3000/categoryEspaces";

  constructor(private http: HttpClient) {}

  getList(){
    return this.http.get<CategoriesEspace[]>(this.url+"/all")
  }
}
