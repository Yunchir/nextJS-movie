import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MovieType from "../../../util/util";

export default function Movie() {
  const [movie, setMovie] = useState<MovieType[] | null>(null);
  const { query } = useRouter();
  console.log("router", query.id);
  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:6161/movies/${query.id}`)
        .then((response) => response.json())
        .then((res) => setMovie(res));
    }
  }, [query.id]);

  return (
    <div>
      {/* ID: {query.id} */}
      {movie && (
        <div className="flex place-content-center">
          <picture className="h-64 w-1/2">
            <img className="m-5 " src={movie[0].poster} alt="img" />
          </picture>
          <div className=" mt-5">
            <div className="title">Title: {movie[0].title}</div>
            <div className="year">Year: {movie[0].year}</div>
            <div className="country">Coutry: {movie[0].countries}</div>
            <div className="fullplot">Plot: {movie[0].fullplot}</div>
          </div>
          <button>More...</button>
        </div>
      )}
    </div>
  );
}
