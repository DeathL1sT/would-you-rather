import React, { useState } from "react";
import avatar from "../asests/02.jpg";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../store/authSlice";

import "./user.scss";
import { LoginOutlined } from "@ant-design/icons";
const User = () => {
  const users = useSelector((state) => state.users.users);
  const [user, setUser] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authAction.login(user));
  };

  return (
    <div className="user">
      <div className="line">
        <img className="avatar" src={avatar} alt="" />
      </div>
      <div className="selection">
        <button onClick={handleLogin}>
          <LoginOutlined style={{ color: "blue" }} />
          Sign In
        </button>
        <div>
          <select onChange={(e) => setUser(e.target.value)} defaultValue="">
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
        </div>
      </div>
    </div>
  );
};

export default User;
