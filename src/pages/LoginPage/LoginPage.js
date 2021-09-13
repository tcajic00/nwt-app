import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

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
          for (let i = 0; i < list.length; i++) {
            if (
              list[i].username === user.username &&
              list[i].password === user.password
            ) {
              if (list[i].admin === true) {
                user.admin = true;
                console.log(user);
                props.handleLogin(user);
                history.push("/");
              }
              props.handleLogin(user);
              history.push("/");
            } else {
              setUser(initial);
              console.log("No such user");
            }
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
