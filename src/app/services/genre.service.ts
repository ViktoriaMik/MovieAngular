import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {IGenreObject} from "../models";
import {HttpClient} from "@angular/common/http";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private genresListUrl = urls.genresListUrl;
  constructor(private httpClient: HttpClient) { }
  getGenresList(): Observable<IGenreObject> {
    return this.httpClient.get<IGenreObject>(this.genresListUrl);
  }
}
