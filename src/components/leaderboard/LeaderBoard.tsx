import React from "react";
import { Store } from "../../store/store";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import "./leaderbord.scss";
const LeaderBoard = () => {
  const users = useSelector((state: Store) => state.users.users);
  const sortedUser = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );
  console.log(sortedUser);

  return (
    <div>
      {sortedUser.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default LeaderBoard;
