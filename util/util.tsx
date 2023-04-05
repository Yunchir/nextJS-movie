// export default interface MovieType {
//   year: number;
//   title: string;
//   poster?: string;
//   imdb: {
//     id: number;
//     votes: number;
//     rating: number;
//   };
// }

type AwardsType = {
  wins: number;
  text: string;
  nominations: number;
};

type ImdbType = {
  id: number;
  rating: number;
  votes: number;
};

type ViewerType = {
  meter: number;
  rating: number;
  numReviews: number;
};

type TomatoesType = { viewer: ViewerType; lastUpdated: Date };

export default interface MovieType {
  _id: string;
  image: string;
  cast: string[];
  genres: string[];
  languages: string[];
  countries: string[];
  directors: string[];
  plot: string;
  type: string;
  title: string;
  rated?: string;
  poster?: string;
  fullplot: string;
  lastupdated: string;
  year: number;
  runtime: number;
  num_mflix_comments: number;
  released: Date;
  imdb: ImdbType;
  awards: AwardsType;
  tomatoes: TomatoesType;
}
