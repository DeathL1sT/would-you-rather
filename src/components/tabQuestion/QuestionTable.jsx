import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../cards/QuestionCard";

const QuestionTable = () => {
  const [showAnswered, setListVisable] = useState(false);

  const questions = useSelector((state) => state.question.questions);
  const users = useSelector((state) => state.users.users);
  const authUser = useSelector((state) => state.auth.user);
  const handleList = () => {
    setListVisable(!showAnswered);
  };

  return (
    <div>
      <div>
        <button onClick={handleList}>
          {showAnswered
            ? "Show Unanswered Questions"
            : "Show Answered Questions"}
        </button>
      </div>
      {showAnswered ? (
        <div>
          {Object.values(questions)
            .filter(
              (q) =>
                q.optionOne.votes.includes(authUser) ||
                q.optionTwo.votes.includes(authUser)
            )
            .map((q) => (
              <QuestionCard key={q.id} q={q} users={users} auth={authUser} />
            ))}
        </div>
      ) : (
        <div>
          {Object.values(questions)
            .filter(
              (q) =>
                !q.optionOne.votes.includes(authUser) &&
                !q.optionTwo.votes.includes(authUser)
            )
            .map((q) => (
              <QuestionCard key={q.id} q={q} users={users} auth={authUser} />
            ))}
        </div>
      )}
    </div>
  );
};

export default QuestionTable;
