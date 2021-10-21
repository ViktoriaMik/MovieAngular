import { Component, OnInit } from '@angular/core';
import {IMovie, IMoviesFromPage} from "../../../../models";
import {MovieByGenreService} from "../../services/movie-bt-genre.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  private moviesFromPage: IMoviesFromPage
  private genreId: number
  private currentPage: number
  movies: IMovie[]
  constructor(private movieByGenreService: MovieByGenreService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.genreId = value.id
      this.movieByGenreService.getMoviesByGenre(this.genreId, this.currentPage).subscribe(value => {
        this.moviesFromPage = value;
        this.movies = this.moviesFromPage.results;
      })
    })
  }

  ngOnInit(): void {
  }
  catchPage(value: number): void {
    this.currentPage = value;
    this.movieByGenreService.getMoviesByGenre(this.genreId, this.currentPage).subscribe(value => {
      this.moviesFromPage = value;
      this.movies = this.moviesFromPage.results;
    })
    // this.movieByGenreService.getMoviesByPage(this.currentPage).subscribe(value => {
    //   this.moviesFromPage = value
    //   this.movies = this.moviesFromPage.results
    // });

  }
}
