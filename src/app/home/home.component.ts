import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({ 
  selector: 'app-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']})

  export class HomeComponent implements OnInit { 
    movieName:any;
    datas:any = { };
    titles:any[] = [];
    
    constructor(private moviesService:MoviesService, private httpClient:HttpClient ) { }

 ngOnInit() { }

 submit() {
   this.moviesService.getMovies(this.movieName)
   .subscribe((item:any) => {
     this.datas = item;
     this.titles= item.Search 
    })
 }}
