
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchedMoviesComponent } from './searchedMovies/searchedMovies.component';


@NgModule({
  declarations: [	
    AppComponent, HomeComponent, MoviesComponent, SearchedMoviesComponent,
      
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AccordionModule.forRoot(),
  
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
