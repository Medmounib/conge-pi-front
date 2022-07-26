import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/model/article';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  art : Article;
  hide = true;
  selectedfile: File;
  constructor(private blogservice : BlogService) { }

  ngOnInit(): void {
    this.art = new Article();
  }
  ser(){
    this.hide=false;
  }
  
  submit(){
    this.blogservice.create(this.art).subscribe();
    this.art = new Article();
  }

}
