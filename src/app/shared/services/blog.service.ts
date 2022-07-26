import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url: string = "http://localhost:3000/Blog";

  constructor(private http: HttpClient) { }
  getList(){
    return this.http.get<Article[]>(this.url);
  }
  getmyList(){
    return this.http.get<Article[]>(this.url+"/mesarticles/1");
  }
  create(s: Article){
    return this.http.post(this.url,s);
  }
  getArticle(id: string){
    return this.http.get<Article>(this.url+"/"+id);
  }
  delete(id: String){
    return this.http.get(this.url+"/del/"+id);
  }
  update(id: String, a : Article){
    return this.http.post(this.url+"/modify/"+id,a);
  }
}
