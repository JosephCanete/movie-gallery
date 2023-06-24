import axios from "axios";

export default async function GetTopMovies() {
  const response = await axios.get(
    `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );
  return response.data.results;
}
