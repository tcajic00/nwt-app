import React, { useState } from "react";
import connect from "react-redux";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const initialUser = {
    username: "",
    loggedIn: false,
    password: "",
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
          render={() => <LoginPage handleLogin={handleLogin} />}
        />
        <Route path="/register" render={() => <RegisterPage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
