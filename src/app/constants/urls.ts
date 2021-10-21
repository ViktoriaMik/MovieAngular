import {environment} from "../../environments/environment";

export const urls = {
  movieByPage: `${environment.API}/discover/movie`,
  imageBaseUrl: 'https://image.tmdb.org/t/p/original',
  movieByID: `${environment.API}/movie`,
  genresListUrl: `${environment.API}/genre/movie/list`,
}
