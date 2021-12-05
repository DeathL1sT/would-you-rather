import React from "react";

import "./QuestionCard.scss";

const QuestionCard = ({ q, users, auth }) => {
  return (
    <div className="card">
      <li>
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
    </div>
  );
};

export default QuestionCard;
