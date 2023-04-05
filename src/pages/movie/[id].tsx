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
  console.log(movie);

  return (
    <div>
      {/* ID: {query.id} */}

      {movie && (
        <>
          {movie.title}
          {movie.year}
          <picture>
            <img src={movie.poster} alt="img" />
          </picture>
        </>
      )}
    </div>
  );
}
