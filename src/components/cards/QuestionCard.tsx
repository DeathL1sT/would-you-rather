import React from "react";
import User from "../../models/user";
import Question from "../../models/question";
import "./QuestionCard.scss";

type Props = {
  q: Question;
  user: User;
};

const QuestionCard = ({ q, user }: Props) => {
  return (
    <div className="card">
      <div>
        <div className="title">{user.name} Asks:</div>
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
              <img alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
