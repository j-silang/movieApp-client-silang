import "./App.css";
import { UserProvider } from "./UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react"
import fetchUserDetails from "./services/fetchUserDetails";

import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home"
import Error from "./pages/Error"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout"
import Movies from "./pages/Movies"

function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  });

  useEffect(() => {
    const data = fetchUserDetails()
    if(data){
      setUser({
        id: data.id,
        isAdmin: data.isAdmin
      })
    }else{
      setUser({
        id: null,
        isAdmin: null
      })
    }
  }, [])

  useEffect(() => {
    console.log('Updated user:', user);
  }, [user]);

  function unsetUser(){
    localStorage.clear();
  }

  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <BrowserRouter>
        <AppNavbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;