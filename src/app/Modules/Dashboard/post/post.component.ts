import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any

  constructor(
    private _post: PostService,
  ) { }

  ngOnInit(): void {

    this._post.getPost().subscribe(
      data => {
        console.log('Post: ', data);
        this.post = data;
      }
    )
  }

}
