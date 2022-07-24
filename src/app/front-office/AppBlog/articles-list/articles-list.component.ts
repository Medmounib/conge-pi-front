import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/model/article';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  
  articles :  Article[];
  constructor(private blogservice : BlogService) { }

  ngOnInit(): void {
    this.blogservice.getList().subscribe(
      (data: Article[]) => this.articles = data
   );
  }
  deleteart(id: String){
    this.blogservice.delete(id).subscribe();
    alert("Article supprimé, veuillez recharger la page!");
  }
 
}
