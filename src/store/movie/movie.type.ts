export interface IMovie {
  id?: string;
  title?: string;
  year?: number;
  generalRating?: number;
  userRating?: number;
  runtime?: number;
  description?: string;
  country?: string;
  type?: string;
  image?: string;
}

export interface OMDBResponse {
  Search: IMovie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}

export interface MovieLibraryState {
  library: IMovieId[];
}

export interface IMovieId {
  id: string;
}
