import axios from "axios";

export default async function GetMovieDetails(movieId: string) {
  const response = await axios.get(
    `${process.env.BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  console.log(response.data);
  return response.data;
}
