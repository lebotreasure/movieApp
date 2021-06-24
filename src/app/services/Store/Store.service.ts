import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  movie: any;
  constructor() { }

  set movieInfo(movie: any) {
    this.movie = movie;
  }

  get movieInfo(){
    return this.movie;
  }
}
