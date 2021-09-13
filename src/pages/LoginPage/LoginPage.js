import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import "./login.css";

const LoginPage = (props) => {
  const initial = {
    username: "",
    loggedIn: false,
    password: "",
  };

  const admin = {
    username: "tcajic00",
    loggedIn: true,
    password: "12345",
  };

  const [user, setUser] = useState(initial);

  let history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value, loggedIn: true });
  };
  return (
    <div className="login-body">
      <h2>AUTO REPAIR SHOP</h2>
      <h3>Login</h3>
      <form
        id="login-form"
        onSubmit={(event) => {
          event.preventDefault();
          if (!user.username || !user.password) return;
          props.handleLogin(user);

          history.push("/");
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
