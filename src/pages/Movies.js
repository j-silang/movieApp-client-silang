import { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import { Container, Row, Spinner } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import AdminDashboard from "./AdminDashboard";

import fetchMovies from "../services/fetchMovies";

export default function MovieList() {
	const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);

	const refreshMovies = () => {
	  return fetchMovies();
	};

	useEffect(() => {
  	refreshMovies().then(data => setMovies(data)).finally(() => setLoading(false));
	}, []);

	if (loading) {
	  return (
	    <div className="position-absolute top-50 start-50 translate-middle">
	      <Spinner animation="border" variant="primary" />
	    </div>
	  );
	}

	return (
		!user.isAdmin
			?	<Container className="my-3 text-center">
					<h1>Movie List</h1>
				  <Row className="g-4 justify-content-center mt-2">
				    {movies.map(movie => (
							<MovieCard
								key={movie._id}
								data={movie}
							/>
				    ))}
				  </Row>
				</Container>
			:	<AdminDashboard movies={movies} />
	);
}