import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMoviesFromPage} from "../../../models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieByGenreService {
  private moviesByPageBaseUrl = urls.movieByPage;
  constructor(private httpClient: HttpClient) { }
  getMoviesByGenre(id: number, page: number): Observable<IMoviesFromPage> {
    return this.httpClient.get<IMoviesFromPage>(`${this.moviesByPageBaseUrl}?with_genres=${id}&page=${page}`)
  }
}
