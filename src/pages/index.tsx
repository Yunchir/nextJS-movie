import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieType from "../../util/util";
import Card from "../components/card";

export default function Home(): JSX.Element {
  const [movie, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    fetch(`http://localhost:6161/movie`)
      .then((response) => response.json())
      .then((res) => setMovies(res));
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap  w-full">
        {movie &&
          movie.map((movie: MovieType, index: number) => (
            <Link href={`movie/${movie._id}`} key={index}>
              <div>
                <Card />
              </div>
            </Link>
          ))}
      </div>
    </Layout>
  );
}
