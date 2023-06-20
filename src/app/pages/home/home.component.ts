import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredPostArray: Array<object> | undefined
  latestPostArray: Array<object> | undefined

  constructor(private postService: PostsService) {

    this.postService.loadData().subscribe(val => {
      this.featuredPostArray = val
      // console.log(this.featuredPostArray)
    })

    this.postService.loadLatest().subscribe(val => {
      this.latestPostArray = val
    })
  }

  ngOnInit() {}
}
