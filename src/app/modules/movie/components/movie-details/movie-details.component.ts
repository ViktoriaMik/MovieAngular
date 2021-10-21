import { Component, OnInit } from '@angular/core';
import {IMovie} from "../../../../models";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;
  paraId: number;
  imgBackgroundUrl: string;
  imgPosterUrl: string;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
    this.activatedRoute.params.subscribe(value => this.paraId = value.id)

  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.paraId).subscribe(value => {
      this.movie = value;
      this.imgPosterUrl = `${urls.imageBaseUrl}${this.movie.poster_path}`;
      this.imgBackgroundUrl = `${urls.imageBaseUrl}${this.movie.backdrop_path}`
    });

  }
}
