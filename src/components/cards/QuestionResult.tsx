import React from "react";
import { Store } from "../../store/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router";
import "./result.scss";
const QuestionResult = () => {
  const { questionId } = useParams();
  const questions = useSelector((state: Store) => state.questions.questions);
  const question = questions[questionId];
  if (!question) {
    return <Navigate to="/notfound" replace={true} />;
  }

  const authedUser = useSelector((state: Store) => state.auth.user);
  const users = useSelector((state: Store) => state.users.users);
  const user = users[question.author];
  const answer = users[authedUser].answers[questionId];
  const optionOneCount = question.optionOne.votes.length;
  const optionTwoCount = question.optionTwo.votes.length;
  const totallCount = optionOneCount + optionTwoCount;

  if (!answer) {
    return <Navigate to={"/question/" + questionId} replace={true} />;
  }

  return (
    <div className="boll">
      <div className="contain">
        <img src={user.avatarURL} alt="" />
        <div className="lable">{user.name} Asks:</div>
        <div className="con">
          <div className="ques">
            <span>Would You Rather?</span>
            <hr />
            <p className={answer === "optionOne" ? "answer" : ""}>
              {question.optionOne.text}
            </p>
            <progress value={optionOneCount} max={totallCount}></progress>
            <p>
              {optionOneCount} of {totallCount} (
              {((optionOneCount / totallCount) * 100).toFixed(0)}%)
            </p>

            <p className={answer === "optionTwo" ? "answer" : ""}>
              {question.optionTwo.text}
            </p>
            <progress value={optionTwoCount} max={totallCount}></progress>
            <p>
              {optionTwoCount} of {totallCount} (
              {((optionTwoCount / totallCount) * 100).toFixed(0)}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionResult;
