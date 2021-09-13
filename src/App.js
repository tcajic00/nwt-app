import React, { createRef, useState } from "react";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import { SnackbarProvider } from "notistack";

const notistackRef = createRef();

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
            <SnackbarProvider
              maxSnack={1}
              ref={notistackRef}
              onClose={(event, reason, key) => {
                if (reason === "clickaway") {
                  notistackRef.current.closeSnackbar(key);
                }
              }}
            >
              <LoginPage handleLogin={handleLogin} allUsers={allUsers} />
            </SnackbarProvider>
          )}
        />
        <Route path="/register" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
