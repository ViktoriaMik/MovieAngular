import {IMovie} from "./movie";

export interface IMoviesFromPage {
  page: number,
  results: IMovie[],
  total_pages: number,
  total_results: number
}
