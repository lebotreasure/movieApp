import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-searched-movies',
  templateUrl: './searchedMovies.component.html',
  styleUrls: ['./searchedMovies.component.scss']
})
export class SearchedMoviesComponent implements OnInit {
  @Input("Movies") movies: any;
  movieTitle:any[];
  search:any[];
  movieArr:any[] = ['Avengers','Fast','Princess','Harry'];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    
  }

}
