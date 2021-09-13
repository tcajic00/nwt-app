import React, { useState } from "react";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

const allUsers = [
  {
    username: "tcajic00",
    password: "12345",
    admin: true,
    loggedIn: true,
  },
  {
    username: "aantic00",
    password: "12345",
    admin: false,
    loggedIn: false,
  },
];

const App = () => {
  const initialUser = {
    username: "",
    password: "",
    admin: false,
    loggedIn: false,
  };

  const [logged, setLogged] = useState(initialUser);

  const handleLogin = (login) => {
    setLogged(login);
  };

  const handleLogout = () => {
    setLogged(initialUser);
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          render={() => (
            <HomePage handleLogout={handleLogout} logged={logged} />
          )}
          exact
        />
        <Route
          path="/login"
          render={() => (
            <LoginPage handleLogin={handleLogin} allUsers={allUsers} />
          )}
        />
        <Route path="/register" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
