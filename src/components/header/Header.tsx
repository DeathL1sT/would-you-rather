import React from "react";
import {
  FormOutlined,
  HomeOutlined,
  DashboardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Store } from "../../store/store";
import { Link } from "react-router-dom";
import "./header.scss";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../../store/authSlice";
const Header = () => {
  const user = useSelector(
    (state: Store) => state.users.users[state.auth.user]
  );

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authAction.logout());
  };

  return (
    <div className="header">
      <div className="title">
        <h2>Would You Rather !!!</h2>
      </div>

      <div className="link">
        <Link to="/">
          <HomeOutlined style={{ color: "#81e309", fontSize: "18px" }} />
          Home
        </Link>

        <Link to="/createquestion">
          <FormOutlined style={{ color: "gold", fontSize: "18px" }} />
          New Question
        </Link>

        <Link to="/leaderboard">
          <DashboardOutlined style={{ color: "red", fontSize: "18px" }} />
          Leader Board
        </Link>
      </div>

      <div className="info">
        <div className="img">
          <img src={user.avatarURL} alt=""></img>
        </div>

        <div className="welcome">Welcome, {user.name}</div>
      </div>

      <div className="but">
        <button onClick={handleLogOut}>
          <LogoutOutlined style={{ color: "red", fontSize: "18px" }} />
          <div>Log Out</div>
        </button>
      </div>
    </div>
  );
};

export default Header;
