import MovieType from "../../util/util";

export default function Card(prop: MovieType): JSX.Element {
  return (
    <div>
      <div className="bg-white h-25">
        <div className="flex flex-wrap w-full">
          <div className="text-black border p-5 w-96 ml-10 mt-10 justify-center items-center">
            <picture>
              <div className="text-center mb-3">{prop.title}</div>
              <img src={prop.poster} alt="posrter" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
}
