import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";

import "./login.css";

const LoginPage = (props) => {
  const initial = {
    username: "",
    password: "",
    admin: false,
    loggedIn: false,
  };

  const [user, setUser] = useState(initial);

  let history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value, loggedIn: true });
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleError = (message) => {
    enqueueSnackbar(message, { variant: "error" });
  };

  return (
    <div className="login-body">
      <h2>AUTO REPAIR SHOP</h2>
      <h3>Login</h3>
      <form
        id="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (!props.allUsers) return;
          const list = props.allUsers;
          if (list.some((u) => u.username === user.username)) {
            if (
              list.some(
                (u) =>
                  u.password === user.password && u.username === user.username
              )
            ) {
              if (user.username === "tcajic00") {
                user.admin = true;
              }
              props.handleLogin(user);
              history.push("/");
            } else {
              handleError("Wrong password!");
            }
          } else {
            handleError("No such user!");
          }
        }}
      >
        <TextField
          name="username"
          label="Username"
          required
          type="text"
          variant="outlined"
          value={user.username}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          required
          type="password"
          variant="outlined"
          value={user.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
};

export default LoginPage;
