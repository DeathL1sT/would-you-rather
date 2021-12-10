import React, { useState } from "react";
import { Store } from "../../store/store";
import avatar from "../asests/02.jpg";
import WYR from "./WYR.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/authSlice";

import "./user.scss";
import { LoginOutlined } from "@ant-design/icons";
const User = () => {
  const users = useSelector((state: Store) => state.users.users);
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authAction.login(user));
  };

  return (
    <div className="user">
      <div className="line">
        <img className="avatar" src={avatar} alt="" />
        <img className="banner" src={WYR} alt="" />
      </div>
      <div className="selection">
        <select
          title="User"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        >
          <option disabled value="">
            Choose a User
          </option>
          {users &&
            Object.values(users).map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
        </select>

        <button onClick={handleLogin}>
          <LoginOutlined style={{ color: "blue" }} />
          Sign In
        </button>
      </div>
    </div>
  );
};

export default User;
