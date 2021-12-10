import React from "react";
import User from "../../models/user";
import "./usercard.scss";
type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const answered = Object.keys(user.answers).length;
  const asked = user.questions.length;
  const score = answered + asked;
  return (
    <div className="main">
      <div className="cont">
        <img src={user.avatarURL} alt="" />
        <p>{user.name}</p>
        <div className="info">
          <p>Answerd: {answered}</p>
          <p>Asked: {asked}</p>
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}
