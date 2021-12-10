import React from "react";
import { useState } from "react";
import { Store } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";
import { useNavigate } from "react-router";
import "./createquestion.scss";

const CreateQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: Store) => state.auth.user);

  const handelAddQuestion = () => {
    const optionOneText = optionOne.trim();
    const optionTwoText = optionTwo.trim();

    if (optionOneText === "" || optionTwoText === "") {
      return;
    }

    dispatch(
      addQuestion({
        author: user,
        optionOneText,
        optionTwoText,
      })
    );
    navigate("/");
  };

  return (
    <div className="newQues">
      <div className="card">
        <div className="title">Create New Question</div>
        <div>Would You Rather!!!</div>
        <div className="text">
          <input
            onChange={(e) => {
              setOptionOne(e.target.value);
            }}
            placeholder="First option"
            type="text"
            value={optionOne}
            required
          />
          <div>OR</div>
          <input
            onChange={(e) => {
              setOptionTwo(e.target.value);
            }}
            placeholder="Second option"
            type="text"
            value={optionTwo}
            required
          />
        </div>
        <button onClick={handelAddQuestion}>Submit</button>
      </div>
    </div>
  );
};

export default CreateQuestion;
