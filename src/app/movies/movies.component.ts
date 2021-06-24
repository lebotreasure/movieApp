import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { MoviesService } from '../services/movies.service';
import { StoreService } from '../services/Store/Store.service';
import { InfoComponent } from './info/info.component';

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
   modalRef: MDBModalRef;

  constructor(private moviesService: MoviesService,private modalService: MDBModalService,private store:StoreService) { }

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

openModal(movie:any) {
  console.log(movie);
  this.store.movieInfo = movie;
  this.modalRef = this.modalService.show(InfoComponent)
}

}