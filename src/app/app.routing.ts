import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'account',loadChildren:()=>import('./account-page/account-routing.module').then(m=>m.AccountRoutingModule)},
  // {path:'learning',loadChildren:()=>import('./learning/learning.module').then(m=>m.LearningModule)},
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
