import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IMovie, IMoviesFromPage} from "../../../models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesByPageBaseUrl = urls.movieByPage;
  private movieByIdUrl = urls.movieByID;
  constructor(private httpClient: HttpClient) { }
  getMoviesByPage(page: number): Observable<IMoviesFromPage> {
    return this.httpClient.get<IMoviesFromPage>(`${this.moviesByPageBaseUrl}?page=${page}`)
  };
  getMovieById(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${this.movieByIdUrl}/${id}`)
  }
}
