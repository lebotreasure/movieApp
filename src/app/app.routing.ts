import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { SearchedMoviesComponent } from './searchedMovies/searchedMovies.component';

const routes: Routes = [
  // {path:'account',loadChildren:()=>import('./account-page/account-routing.module').then(m=>m.AccountRoutingModule)},
  // {path:'learning',loadChildren:()=>import('./learning/learning.module').then(m=>m.LearningModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'searchedMovies', component: SearchedMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
