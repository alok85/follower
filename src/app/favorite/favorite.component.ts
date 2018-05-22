import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('email') email1: string;
  //@Input('email') email1: string; // always used aliase
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
