import { Comment } from "./comment";
import { User } from "./user";

export class Article {
    _id: String;
    user: User;
    title : string;
    img : String;
    descr  : string;
    content : string;
    comments   : String ;
    rating : number;
  }
  