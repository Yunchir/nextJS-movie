import MovieType from "../../../util/util";
import { GetStaticProps, GetStaticPropsContext } from "next";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

export default function Movie({
  data: movie,
}: {
  data: MovieType[];
}): JSX.Element {
  console.log(movie);
  // const [movie, setMovie] = useState<MovieType[] | null>(null);
  // const { query } = useRouter();
  // console.log("router", query.id);
  // useEffect(() => {
  //   if (query.id) {
  //     fetch(`http://localhost:6161/movies/${query.id}`)
  //       .then((response) => response.json())
  //       .then((res) => setMovie(res));
  //   }
  // }, [query.id]);

  return (
    <div>
      {/* ID: {query.id} */}(
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
      </div>
      )
    </div>
  );
}

export const getStaticPaths = async () => {
  const result = await fetch("http://localhost:6161/movie_id");
  const resJson = await result.json();
  const paths = await resJson.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

interface MovieProps {
  data: MovieType | null;
}

export const getStaticProps: GetStaticProps<MovieProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:6161/movies/${params?.id}`);
  const resjson = await res.json();
  console.log("ene yu veee????", resjson);
  return {
    props: {
      data: resjson,
    },
  };
};
