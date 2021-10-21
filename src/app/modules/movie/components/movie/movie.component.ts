import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../../models";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovie
  posterUrl: string
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.posterUrl = `${urls.imageBaseUrl}${this.movie.poster_path}`
  }
  getMovieDetails(): void {
    this.router.navigate([`movie/${this.movie.id}`]);
  }
}
