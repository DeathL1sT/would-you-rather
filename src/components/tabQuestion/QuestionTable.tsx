import React from "react";
import { Store } from "../../store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../cards/QuestionCard";
import "./questiontable.scss";
const QuestionTable = () => {
  const [showAnswered, setShowAnswered] = useState(false);

  const questions = useSelector((state: Store) => state.questions.questions);
  const users = useSelector((state: Store) => state.users.users);
  const authUser = useSelector((state: Store) => state.auth.user);

  const selectedQuestions = Object.values(questions)
    .filter((q) =>
      showAnswered
        ? q.optionOne.votes.includes(authUser) ||
          q.optionTwo.votes.includes(authUser)
        : !q.optionOne.votes.includes(authUser) &&
          !q.optionTwo.votes.includes(authUser)
    )
    .sort((a, b) => b.timestamp - a.timestamp);

  const handleList = () => {
    setShowAnswered(!showAnswered);
  };

  return (
    <div className="main">
      <div className="click">
        <button onClick={handleList}>
          {showAnswered
            ? "Show Unanswered Questions"
            : "Show Answered Questions"}
        </button>
      </div>
      {selectedQuestions.map((q) => (
        <QuestionCard key={q.id} q={q} user={users[q.author]} />
      ))}
    </div>
  );
};

export default QuestionTable;
