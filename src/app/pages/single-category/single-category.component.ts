import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  postArray: Array<object> | undefined
  categoryObj: any

  constructor(private route: ActivatedRoute, private postService: PostsService) {}

  ngOnInit() {
    this.route.params.subscribe(val => {
      // console.log(val)
      this.categoryObj = val
      this.postService.loadCategoryPosts(val['id']).subscribe(post => {
        this.postArray = post
      })
    })
  }

}
