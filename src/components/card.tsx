import { useEffect, useState } from "react";
import MovieType from "../../util/util";

export default function Card(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:6161/movie")
      .then((response) => response.json())
      .then((res) => setMovies(res));
  }, []);
  return (
    <div className="bg-white h-25">
      <div className="flex flex-wrap w-full">
        {movies &&
          movies.map((movie: MovieType, index: number) => (
            <div
              className="text-black border p-5 w-96 ml-10 mt-10 justify-center items-center"
              key={index}
            >
              <picture>
                <div className="text-center mb-3">{movie.title}</div>
                <img src={movie.poster} alt="posrter" />
              </picture>
            </div>
          ))}
      </div>
    </div>
  );
}
