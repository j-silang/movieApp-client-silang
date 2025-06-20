import { Table, Button } from 'react-bootstrap';

export default function AdminDashboard({ movies }) {

  const movieList = movies.map(movie => (
    <tr key={movie._id}>
      <td className="d-none d-lg-table-cell">{movie._id}</td>
      <td>{movie.title}</td>
      <td className="d-none d-lg-table-cell">{movie.director}</td>
      <td className="d-none d-lg-table-cell">{movie.year}</td>
      <td className="text-center">
        <Button variant="primary">Update</Button>
      </td>
      <td className="text-center">
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  ));

  return(
    <>
      <h1 className="text-center">Admin Dashboard</h1>
      <Table striped bordered hover responsive className="align-middle">
        <thead>
          <tr className="text-center">
            <th className="d-none d-lg-table-cell">ID</th>
            <th>Title</th>
            <th className="d-none d-lg-table-cell">Director</th>
            <th className="d-none d-lg-table-cell">Year</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {movieList}
        </tbody>
      </Table>    
    </>
  )
}