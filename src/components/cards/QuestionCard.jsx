import React from "react";
import { useSelector } from "react-redux";
import "./QuestionCard.scss";

const QuestionCard = () => {
  const questions = useSelector((state) => state.question.questions);
  const users = useSelector((state) => state.users.users);
  const authUser = useSelector((state) => state.auth.user);

  return (
    <div className="card">
      {Object.values(questions)
        .filter(
          (q) =>
            q.optionOne.votes.includes(authUser) ||
            q.optionTwo.votes.includes(authUser)
        )
        .map((q) => (
          <li key={q.id}>
            <div>
              <div className="title">{users[q.author].name} Asks:</div>
              <div className="content">
                <div className="question">
                  <span>Would You Rather</span>
                  <p>
                    {q.optionOne.text}
                    <br />
                    {q.optionTwo.text}
                  </p>
                  <button>View Poll</button>
                  <div className="avatar">
                    <img />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
    </div>
  );
};

export default QuestionCard;
