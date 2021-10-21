import {IGenre} from "./genre";
import {IProductionCompany} from "./production-company";
import {IProductionCountry} from "./production-country";
import {ISpokenLanguage} from "./spoken-language";

export interface IMovie {
  adult: boolean,
  backdrop_path: string,
  budget: number,
  genres: IGenre[],
  homepage?: string,
  id: number,
  original_language: string,
  original_title: string,
  overview?: string,
  popularity: number,
  poster_path: string,
  production_companies: IProductionCompany[],
  production_countries: IProductionCountry[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: ISpokenLanguage[],
  status: string,
  tagline?: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}
