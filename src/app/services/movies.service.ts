import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(movieTitle:any): Observable<any> {
    // for(let i=0; i <= 100; i++){
      //let movieRand = movieTitle.indexOf(Math.floor(Math.random() * movieTitle.length));
      return this.http.get(`http://www.omdbapi.com/?s=${movieTitle}&apikey=f3ed7461`);
    // }
    
  }
}
// http://www.omdbapi.com/?apikey=[f3ed7461]&