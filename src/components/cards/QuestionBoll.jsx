import React from "react";
import { useSelector } from "react-redux";
const QuestionBoll = () => {
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.question.questions);

  return (
    <div className="boll">
      {Object.values(questions).filter((q) => q.id === q.id.includes(users.id))}
      <div>
        <div className="lable"> Asks:</div>
        <div className="con">
          <div className="ques">
            <span>Would You Rather</span>
            <li>
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
