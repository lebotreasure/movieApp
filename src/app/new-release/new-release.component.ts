import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-new-release',
  templateUrl: './new-release.component.html',
  styleUrls: ['./new-release.component.scss']
})
export class NewReleaseComponent implements OnInit {
  movieTitle:any[];
  search:any[];
  movieArr:any[] = [2021,2020,2019,2018];
  
  

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