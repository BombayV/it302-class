import React, { useState, useCallback } from "react";
import { Routes, Route, NavLink } from "react-router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import AddReview from "./routes/addReview";
import MoviesList from "./routes/moviesList";
import Movie from "./routes/movie";
import Login from "./routes/login";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user, setUser] = useState(null);
  const loginSetter = useCallback((user) => {
    setUser(user);
  }, [setUser]);

  const login = async (user) => {
    loginSetter(user);
  }

  const logout = async () => {
    loginSetter(null);
  }

  return (
    <div className="content">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>Movie Reviews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={"/movies"}>
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to={user ? "" : "/login"}>
              {user ? "Logout User" : "Login"}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<MoviesList />}></Route>
        <Route path="/movies" element={<MoviesList />}></Route>
        <Route path="/movies/:id/" element={<Movie user={user} />}></Route>
        <Route
          path="/movies/:id/review"
          element={<AddReview user={user} />}
        ></Route>
        <Route path="/login" element={<Login user={user} loginSetter={loginSetter} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
