import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../UserContext";

function AppNavbar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/movies">{!user.isAdmin ? "Movies" : "Dashboard"}</Nav.Link>
            {user.id !== null
              ? <>
                  <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                </>
              : <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">Register</Nav.Link>
                </>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;