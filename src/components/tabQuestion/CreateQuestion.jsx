import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionSlice";
import "./createquestion.scss";

const CreateQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTow, setOptionTow] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handelAddQuestion = () => {
    dispatch(
      addQuestion({
        author: user,
        optionOneText: optionOne,
        optionTwoText: optionTow,
      })
    );
  };

  return (
    <div className="newQues">
      <div className="title">Create New Question</div>
      <div>Would You Rather!!!</div>
      <div className="text">
        <input
          onChange={(e) => {
            setOptionOne(e.target.value);
          }}
          type="text"
          value={optionOne}
        />
        <div>OR</div>
        <input
          onChange={(e) => {
            setOptionTow(e.target.value);
          }}
          type="text"
          value={optionTow}
        />
      </div>
      <button onClick={handelAddQuestion}>Submit</button>
    </div>
  );
};

export default CreateQuestion;
