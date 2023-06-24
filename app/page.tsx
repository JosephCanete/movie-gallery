import GetTopMovies from "./api/GetTopMovies";
import Card from "./components/Card";

type Movie = {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default async function Home() {
  const movies = await GetTopMovies();

  return (
    <div className="grid gap-16 grid grid-cols-fluid">
      {movies.map((movie: Movie) => (
        <Card {...movie} key={movie.id} />
      ))}
    </div>
  );
}
