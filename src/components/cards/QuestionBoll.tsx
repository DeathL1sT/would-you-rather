import React, { useState } from "react";
import { Store } from "../../store/store";
import Question from "../../models/question";
import { useSelector, useDispatch } from "react-redux";
import { saveAnswer } from "../../store/questionsSlice";
import { useParams } from "react-router";
import { Navigate } from "react-router";
import "./boll.scss";
const QuestionBoll = () => {
  const { questionId } = useParams();
  const questions = useSelector((state: Store) => state.questions.questions);
  const question = questions[questionId];

  if (!question) {
    return <Navigate to="/notfound" replace={true} />;
  }

  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();
  const authedUser = useSelector((state: Store) => state.auth.user);
  const users = useSelector((state: Store) => state.users.users);
  const user = users[question.author];

  if (users[authedUser].answers[questionId]) {
    return <Navigate to={"/result/" + questionId} replace={true} />;
  }

  return (
    <div className="boll">
      <div className="contain-bol">
        <img src={user.avatarURL} alt="" />
        <div className="lable">{user.name} Asks:</div>
        <div className="con">
          <div className="ques">
            <span>Would You Rather?</span>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(saveAnswer({ authedUser, answer, qid: questionId }));
              }}
            >
              <input
                id="optionOne"
                type="checkbox"
                checked={answer === "optionOne"}
                onChange={() => setAnswer("optionOne")}
              />
              <label htmlFor="optionOne">{question.optionOne.text}</label>

              <input
                id="optionTwo"
                type="checkbox"
                checked={answer === "optionTwo"}
                onChange={() => setAnswer("optionTwo")}
              />
              <label htmlFor="optionTwo">{question.optionTwo.text}</label>

              {answer !== "" && <button type="submit">Submit</button>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBoll;
