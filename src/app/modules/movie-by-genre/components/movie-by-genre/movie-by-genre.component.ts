import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../../models";
import {Router} from "@angular/router";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie-by-genre',
  templateUrl: './movie-by-genre.component.html',
  styleUrls: ['./movie-by-genre.component.css']
})
export class MovieByGenreComponent implements OnInit {
  @Input()
  movie: IMovie
  posterUrl: string
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.posterUrl = `${urls.imageBaseUrl}${this.movie.poster_path}`
  }
  getMovieDetails(): void {
    this.router.navigate([`movie/${this.movie.id}`]);
  }
}
