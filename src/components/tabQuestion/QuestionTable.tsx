import React from "react";
import { Store } from "../../store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "../cards/QuestionCard";

const QuestionTable = () => {
  const [showAnswered, setShowAnswered] = useState(false);

  const questions = useSelector((state: Store) => state.questions.questions);
  const users = useSelector((state: Store) => state.users.users);
  const authUser = useSelector((state: Store) => state.auth.user);

  const handleList = () => {
    setShowAnswered(!showAnswered);
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
              <QuestionCard key={q.id} q={q} user={users[q.author]} />
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
              <QuestionCard key={q.id} q={q} user={users[q.author]} />
            ))}
        </div>
      )}
    </div>
  );
};

export default QuestionTable;
