export interface IMovie {
  id: string;
  title: string;
  year: number;
  generalRating: number;
  userRating: number;
  runtime: number;
  description: string;
  country?: string;
  type?: string;
  image: string;
  website: string;
}

export interface OMDBResponse {
  Search: IMovie[];
  totalResults: string;
  Response: "True" | "False";
  Error?: string;
}
