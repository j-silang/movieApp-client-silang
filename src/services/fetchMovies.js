import axios from "axios";

export default async function fetchWorkouts() {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/movies/getMovies`);
  return response.data.movies;
}