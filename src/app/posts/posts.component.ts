import { BadRequestError } from './../error/bad-request-error';
import { AppError } from './../error/app-error';
import { PostService } from './../services/post.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NotFoundException } from './../error/not-foundException';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts : any[];
  


  constructor(private service : PostService) {
    service.getAll()
      .subscribe(posts => this.posts = posts);
   }

  
  createPost(input : HTMLInputElement) {
    let postData = {title : input.value};
    this.posts.splice(0, 0, postData); 

    input.value = '';
    this.service.create(postData)
      .subscribe(
        newPost => {
          postData['id'] = newPost.id; 
        },
        (error : AppError) => {
          this.posts.splice(0, 1);
          if(error instanceof BadRequestError) {
              //
          } else throw error;
      })
  }

  updateData(post) {
    this.service.update(post)
      .subscribe(updatedPost => console.log(updatedPost));
  }


  deletePost(post) {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      
      this.service.delete(post.id)
      .subscribe(null,
        (error : AppError)  => {
          this.posts.splice(1, 0 , post);
          if(error instanceof NotFoundException) {
            alert("Post has been already deleted.");
          }
          else  throw error;
        })
  }

}
