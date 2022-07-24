import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/model/article';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-art-update',
  templateUrl: './art-update.component.html',
  styleUrls: ['./art-update.component.css']
})
export class ArtUpdateComponent implements OnInit {
  art: Article;
  constructor(private route: ActivatedRoute,private blogservice : BlogService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('id'));
    this.blogservice.getArticle(productIdFromRoute).subscribe(
      (data: Article) =>  this.art = data);
    }  
  
  update(id: String){
      this.blogservice.update(id,this.art).subscribe();
      alert("Article updated!, please reload the page");
  }

}
