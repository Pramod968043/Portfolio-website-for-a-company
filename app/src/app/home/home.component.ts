import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ele:number = 1;
  movies:any;
  show:boolean = false;

  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
    this.api.getMovies().subscribe(res=>{
      this.movies = res;
      console.log(this.movies)
    })
  }
  
  open(i:number){
    this.ele=i;
    this.show=true;
  }

}
