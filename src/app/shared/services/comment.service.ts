import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  urlcmnt: string = "http://localhost:3000/article/comment";

  constructor(private http: HttpClient) { }

  getComment(id: string){
    return this.http.get<Comment>(this.urlcmnt+"/"+id);
  }
  postComment(c : Comment, id: string){
    return this.http.post(this.urlcmnt+"/"+id,c);
  }
}
