import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import {MovieService} from "./services/movie.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MovieComponent } from './components/movie/movie.component';
import {InterceptorService} from "../../services";
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';


@NgModule({
  declarations: [
    MoviesComponent,
    PaginationComponent,
    MovieComponent,
    MovieDetailsComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbAlertModule,
    NgbPaginationModule
  ],
  providers: [MovieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }]
})
export class MovieModule { }
