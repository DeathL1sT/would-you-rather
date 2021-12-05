import React from "react";
import User from "../user/User";

import "./login.scss";
import UserLogIn from "./UserLogIn";

const Login = () => {
  return (
    <div className="content">
      <div className="login">
        <UserLogIn />
        <User />
      </div>
    </div>
  );
};

export default Login;
