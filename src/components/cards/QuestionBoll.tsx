import React from "react";
import { Store } from "../../store/store";
import Question from "../../models/question";
import { useSelector } from "react-redux";

const QuestionBoll = () => {
  const user = useSelector((state: Store) => state.auth.user);
  const questions = useSelector((state: Store) => state.questions.questions);

  return (
    <div className="boll">
      {/* {Object.values(questions)
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
        ))} */}
      <div>
        <div className="lable">{} Asks:</div>
        <div className="con">
          <div className="ques">
            <span>Would You Rather</span>

            <button>Submit</button>
            <div className="ava">
              <img alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBoll;
