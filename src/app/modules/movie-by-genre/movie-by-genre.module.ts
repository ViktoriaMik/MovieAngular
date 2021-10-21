import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieByGenreRoutingModule } from './movie-by-genre-routing.module';
import { MoviesByGenreComponent } from './components/movies-by-genre/movies-by-genre.component';
import { MovieByGenreComponent } from './components/movie-by-genre/movie-by-genre.component';
import { PaginationByGenreComponent } from './components/pagination-by-genre/pagination-by-genre.component';
import { StarRatingByGenreComponent } from './components/star-rating-by-genre/star-rating-by-genre.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbAlertModule, NgbModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {MovieByGenreService} from "./services/movie-bt-genre.service";
import {InterceptorService} from "../../services";

@NgModule({
  declarations: [
    MoviesByGenreComponent,
    MovieByGenreComponent,
    PaginationByGenreComponent,
    StarRatingByGenreComponent
  ],
  imports: [
    CommonModule,
    MovieByGenreRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [
    MovieByGenreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class MovieByGenreModule { }
