import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  constructor(private route : ActivatedRoute) {


   }

  ngOnInit() {
    this.route.paramMap['id'];

    this.route.paramMap
      .subscribe(params => {
        params.get('id');
    })
  }

}
