import React from "react";
import WYR from "./WYR.jpg";
import User from "../user/User";
import "./userlogin.scss";

const UserLogIn = () => {
  return (
    <div className="contain">
      <div>
        <div className="lable"> Please Sign In For Game</div>
        <div className="rather">
          <img src={WYR} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserLogIn;
