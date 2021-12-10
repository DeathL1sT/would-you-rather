import React from "react";
import User from "../../models/user";
import Question from "../../models/question";
import "./QuestionCard.scss";
import { Link } from "react-router-dom";

type Props = {
  q: Question;
  user: User;
};

const QuestionCard = ({ q, user }: Props) => {
  return (
    <div className="card">
      <img src={user.avatarURL} alt="" />
      <div className="title">{user.name} Asks:</div>
      <div className="con">
        <div className="content">
          <div className="question">
            <span>Would You Rather</span>
            <p>
              {q.optionOne.text}
              <br />
              {q.optionTwo.text}
            </p>
            {}
            <Link to={"/question/" + q.id}>
              <button>View Poll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
