export class Movie {
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

  constructor(
    id: string,
    title: string,
    year: number,
    generalRating: number,
    userRating: number,
    runtime: number,
    description: string,
    image: string,
    website: string,
    country?: string,
    type?: string
  ) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.generalRating = generalRating;
    this.userRating = userRating;
    this.runtime = runtime;
    this.description = description;
    this.image = image;
    this.website = website;
    this.country = country;
    this.type = type;
  }
}
