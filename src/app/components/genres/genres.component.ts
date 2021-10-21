import { Component, OnInit } from '@angular/core';
import {GenreService} from "../../services";
import {IGenre, IGenreObject} from "../../models";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];
  genreObject: IGenreObject
  constructor(private genreService: GenreService) { }

  ngOnInit(): void {
    this.genreService.getGenresList().subscribe(value => {
      this.genreObject = value
      this.genres = this.genreObject.genres
    })
  }

}
