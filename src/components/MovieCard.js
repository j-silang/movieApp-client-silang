import { Card, Col, Button } from 'react-bootstrap';
import { useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from 'react-router-dom';

export default function MovieCard({ data }) {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const redirectToLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <Col sm={6} md={4} className="mb-4">
        <Card className="h-100 text-center shadow-sm">
          <Card.Body>
            <Card.Title><b>{data.title}</b></Card.Title>
            <Card.Text>Director: {data.director}</Card.Text>
            <Card.Text>Year: {data.year}</Card.Text>
            <Card.Text>Description: {data.description}</Card.Text>
            <Card.Text>Genre: {data.genre}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-evenly py-3">
            {user.id !== null
              ? <Button variant="primary">View Movie</Button>
              : <Button variant="danger" onClick={redirectToLogin}>You must be logged in to view movies</Button>
            }
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}
