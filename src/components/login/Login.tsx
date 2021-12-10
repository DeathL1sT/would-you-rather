import React from "react";
import User from "../user/User";

import "./login.scss";

const Login = () => {
  return (
    <div className="login-content">
      <div className="login">
        <p className="lable">Please Sign In For Game</p>
        <div className="bord">
          <User />
        </div>
      </div>
    </div>
  );
};

export default Login;
