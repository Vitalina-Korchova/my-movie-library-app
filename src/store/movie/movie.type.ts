export interface IMovie {
  imdbID?: string;
  Title?: string;
  Year?: number;
  imdbRating?: number;
  userRating?: number;
  Runtime?: string;
  Plot?: string;
  Country?: string;
  Type?: string;
  Poster?: string;
  Genre?: string[];
  Actors?: string[];
  Language?: string[];
}

export interface OMDBResponse {
  Search: IMovie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export interface MovieLibraryState {
  library: IMovie[];
  isInitializedMovies: boolean;
}
