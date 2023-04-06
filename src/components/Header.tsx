import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <div>
      <div className="bg-red-600">
        <nav className="bg-white border-gray-200 bg-red-600 container mx-auto">
          <div className="flex flex-wrap justify-between items-center p-4">
            <Link href={"/"}>
              <picture>
                <img
                  className="w-48"
                  alt="Rotten Tomatoes"
                  src="https://images.fandango.com/cms/assets/bf631b80-bf47-11ed-a868-adceb8892ad3--rt25-logo-mainnav-322x100.png"
                />
              </picture>
            </Link>

            <span className="self-center text-white">
              <input
                type="text"
                placeholder="search, movies, TV, actors, more..."
                className="p-3 rounded-lg w-96"
              />
            </span>

            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                  <Link
                    href="/movie"
                    className="text-gray-900 dark:text-white hover:bg-white p-3 rounded-xl hover:text-black text-xl"
                    aria-current="page"
                  >
                    movie
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:bg-white p-3 rounded-xl hover:text-black text-xl"
                  >
                    tv show
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:bg-white p-3 rounded-xl hover:text-black text-xl"
                  >
                    movie trivia
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:bg-white p-3 rounded-xl hover:text-black text-xl"
                  >
                    news
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:bg-white p-3 rounded-xl hover:text-black text-xl"
                  >
                    showtimes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="bg-gray-500  ">
        <div className="container mx-auto flex">
          <h3 className="text-amber-300 m-3">TRENING ON RT</h3>
          <p className="text-white m-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
