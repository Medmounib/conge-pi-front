import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/model/article';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-mes-articles',
  templateUrl: './mes-articles.component.html',
  styleUrls: ['./mes-articles.component.css']
})
export class MesArticlesComponent implements OnInit {
  articles :  Article[];
  hide = true;
  constructor(private blogservice : BlogService) { }

  ngOnInit(): void {
    this.blogservice.getmyList().subscribe(
      (data: Article[]) => {
        if(data){
          this.articles = data;
        }
        else { this.hide=false}
      }
   );
  }
  deleteart(id: String){
    this.blogservice.delete(id).subscribe();
    alert("Article supprimé, veuillez recharger la page!");
  }
}
