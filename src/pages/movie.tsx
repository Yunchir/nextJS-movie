import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import MovieType from "../../util/util";
import Card from "../components/card";

export default function Movie(): JSX.Element {
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
          movie.map(
            (movie: MovieType, index: number): JSX.Element => (
              <div className="" key={index}>
                {" "}
                <Link href={`movie/${movie._id}`}>
                  <Card {...movie} />
                </Link>
              </div>
            )
          )}
      </div>
      <button className="border-3 bg-gray-500  text-white">Loading...</button>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:6161/movies") {
//     const movies = await res.json()
//     return {
//       props: {
//         movies : movies,
//       }
//     }
//   }
// }
