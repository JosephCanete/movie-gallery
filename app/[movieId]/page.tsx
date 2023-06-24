import React from "react";
import GetMovieDetails from "../api/GetMovieDetails";
import Poster from "../components/Poster";

type params = {
  params: { movieId: string };
};

export default async function MovieDetails({ params }: params) {
  const { movieId } = params;
  const { title, overview, poster_path, release_date, runtime, status } =
    await GetMovieDetails(movieId);
  return (
    <div className="m-5 flex justify-center items-center flex-col">
      <h2 className="text-2xl">{title}</h2>
      <h2 className="text-lg">{release_date}</h2>
      <h2>Runetime: {runtime}</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded">
        {status}
      </h2>
      <div>
        <Poster
          srcPath={process.env.IMAGE_URL + poster_path}
          height={480}
          width={480}
          alt={title}
        />
      </div>

      <p className="text-1xl max-w-2xl mt-1">{overview}</p>
    </div>
  );
}
