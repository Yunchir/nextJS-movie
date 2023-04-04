import { Schema } from "mongoose";
import { useEffect, useState } from "react";
type awardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type imdbType = {
  rating: number;
  votes: number;
  id: number;
};
type viewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type tomatoesType = { viewer: viewerType; lastUpdated: Date };

interface movieType {
  plot: string;
  genres: string[];
  runtime: number;
  poster?: string;
  cast: string[];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated?: string;
  awards: awardsType;
  lastupdated: string;
  year: number;
  imdb: imdbType;
  countries: string[];
  type: string;
  tomatoes: tomatoesType;
}

const moviesSchema = new Schema<movieType>({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: Object,
  lastupdated: String,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
});

export default function Card(): JSX.Element {
  // const [movies, setMovies] = useState();s
  useEffect(() => {
    fetch("http://localhost:8080/movie")
      .then((response) => response.json())
      .then((res) => setMovies(res));
  }, []);
  return (
    <div className="bg-white h-25">
      <div className="text-black border p-5 w-96 ml-10 mt-10 flex justify-center items-center">
        {/* <img
          src="https://m.media-amazon.com/images/M/MV5BMDRjYWI5NTMtZTYzZC00NTg4LWI3NjMtNmI3MTdhMWQ5MGJlXkEyXkFqcGdeQXVyNTg4MDc4Mg@@._V1_.jpg"
          alt="###"
        /> */}
        {/* {movies &&
          movies.map((movie: MovieType, index: number) => (
            <div key={index} className="w-1/6 h-1/6">
              {movie.title}
            </div>
          ))} */}
      </div>
    </div>
  );
}
