import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesByGenreComponent} from "./components/movies-by-genre/movies-by-genre.component";
import {MovieDetailsComponent} from "../movie/components/movie-details/movie-details.component";

const routes: Routes = [
  {path: ':id', component: MoviesByGenreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieByGenreRoutingModule { }
