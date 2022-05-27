import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies:any;
  id:any;
  constructor(private ar:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.id=this.ar.snapshot.paramMap.get('id');
    this.api.getMovies().subscribe(res=>{
      this.movies = res;
    })
  }

}
