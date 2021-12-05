import React from "react";
import { useSelector } from "react-redux";
const QuestionBoll = () => {
  const user = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.question.questions);

  return (
    <div className="boll">
      {Object.values(questions)
        .filter((q) => q.id === q.author.includes(user.id))
        .map((q) => (
          <li key={q.id}>
            <div>
              <lable>
                <input type="checkbox" checked="checked" />
                khjkgjkgjk
              </lable>
              <lable>
                <input type="checkbox" checked="checked" />
                kjhjkhk
              </lable>
            </div>
          </li>
        ))}
      <div>
        <div className="lable">{} Asks:</div>
        <div className="con">
          <div className="ques">
            <span>Would You Rather</span>

            <button>Submit</button>
            <div className="ava">
              <img />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBoll;
