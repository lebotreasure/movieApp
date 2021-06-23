import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
   @Input("Movies") movies: any;
   movieTitle:any[];
   search: any[]= [];
   movieArr:any[] =['Avengers','Fast','Princess','Harry'];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    for (const i in this.movieArr) {
      console.log(this.search);
      this.moviesService.getMovies(this.movieArr[i]).subscribe((value: any) => {
           for (const movie in value.Search) {
             console.log(value.Search[movie]);
             this.search.push(value.Search[movie])
           }
         });
         console.log(this.search);
    }

}

}