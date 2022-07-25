import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/model/article';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  artList: Article [];
  constructor(private service: BlogService) { }

  ngOnInit(): void {
    this.service.getList().subscribe(
      (data: Article[]) => this.artList = data
    );
  }

}
