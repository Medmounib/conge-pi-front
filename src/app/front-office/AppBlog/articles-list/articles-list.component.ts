import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/shared/model/article';
import { Reclamation } from 'src/app/shared/model/reclamation';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ReclamationService } from 'src/app/shared/services/reclamation.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  
  articles :  Article[];
  rec : Reclamation;
  constructor(private blogservice : BlogService, private recser : ReclamationService) { }

  ngOnInit(): void {
    this.rec= new Reclamation();
    this.blogservice.getList().subscribe(
      (data: Article[]) => this.articles = data
   );
  }
  deleteart(id: String){
    this.blogservice.delete(id).subscribe();
    alert("Article supprimé, veuillez recharger la page!");
  }
  reclamer(id: String){
     this.recser.create(id,this.rec).subscribe();
  }
}
