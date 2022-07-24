import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/model/article';
import { Comment } from 'src/app/shared/model/comment';
import { BlogService } from 'src/app/shared/services/blog.service';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-article-det',
  templateUrl: './article-det.component.html',
  styleUrls: ['./article-det.component.css']
})
export class ArticleDetComponent implements OnInit {
  art: Article | undefined;
  cmnt: Comment | undefined;
  mycmnt: Comment;
  commentList: Comment[] = [];
  constructor(private route: ActivatedRoute, private service: BlogService, private cmntser: CommentService) {

  }

  ngOnInit(): void {
    this.mycmnt = new Comment();
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('id'));
    this.service.getArticle(productIdFromRoute).subscribe(
      (data: Article) => {
        this.art = data;
        for (let i = 0; i < this.art?.comments.length; i++) {
          this.cmntser.getComment(this.art?.comments[i]).subscribe(
            (data1: Comment) => {
              this.cmnt = data1;
              this.commentList.push(this.cmnt);
            }
          )
        }
      }

    );

  }
  addComment() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('id'));
    this.cmntser.postComment(this.mycmnt, productIdFromRoute).subscribe(
      () => this.commentList = [this.mycmnt, ...this.commentList]
    );
    this.mycmnt = new Comment();
  }

}
