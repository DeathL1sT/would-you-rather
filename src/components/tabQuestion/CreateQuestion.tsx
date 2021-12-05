import React from "react";
import { useState } from "react";
import { Store } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion } from "../../store/questionsSlice";
import "./createquestion.scss";

const CreateQuestion = () => {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: Store) => state.auth.user);

  const handelAddQuestion = () => {
    dispatch(
      addQuestion({
        author: user,
        optionOneText: optionOne,
        optionTwoText: optionTwo,
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
          placeholder="First option"
          type="text"
          value={optionOne}
        />
        <div>OR</div>
        <input
          onChange={(e) => {
            setOptionTwo(e.target.value);
          }}
          placeholder="Second option"
          type="text"
          value={optionTwo}
        />
      </div>
      <button onClick={handelAddQuestion}>Submit</button>
    </div>
  );
};

export default CreateQuestion;
