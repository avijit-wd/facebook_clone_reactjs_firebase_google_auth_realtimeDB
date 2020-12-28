import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
const Login = () => {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
          alt=""
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
