import { Component, OnInit } from '@angular/core';
import {IMovie, IMoviesFromPage} from "../../../../models";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private currentPage: number;
  private moviesFromPage: IMoviesFromPage;
  movies: IMovie[]

  constructor(private movieService: MovieService) {

  }

  ngOnInit(): void {
    this.movieService.getMoviesByPage(this.currentPage).subscribe(value => {
      this.moviesFromPage = value
      this.movies = this.moviesFromPage.results
    })
  };

  catchPage(value: number): void {
    this.currentPage = value;
    this.movieService.getMoviesByPage(this.currentPage).subscribe(value => {
      this.moviesFromPage = value
      this.movies = this.moviesFromPage.results

    });
  }
}
