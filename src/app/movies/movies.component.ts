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
   movieArr:any[] =['Cinderella','Fast','Princess','Harry','Little','Bay','Hard', 'Floor','Spiderman', 'Batman', 'Game of Thrones', 'Vikings', 'Suits', 'Power', 'Cars', 'Disney','Transformers','Avengers','Race','X-Men'];
   modalRef: MDBModalRef;

  constructor(private moviesService: MoviesService,private modalService: MDBModalService,private store:StoreService) { }

  ngOnInit(): void {
    for (const i in this.movieArr) {
      this.moviesService.getMovies(this.movieArr[i]).subscribe((value: any) => {
           for (const movie in value.Search) {
             this.search.push(value.Search[movie])
           }
         });
    }

}

openModal(movie:any) {
  this.store.movieInfo = movie;
  this.modalRef = this.modalService.show(InfoComponent)
}

}