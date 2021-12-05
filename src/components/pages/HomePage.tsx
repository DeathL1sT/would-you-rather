import React from "react";
import QuestionBoll from "../cards/QuestionBoll";
import CreateQuestion from "../tabQuestion/CreateQuestion";

import QuestionTable from "../tabQuestion/QuestionTable";
import "./home.scss";
const HomePage = () => {
  return (
    <main>
      <QuestionTable />
      <QuestionBoll />
      <CreateQuestion />
    </main>
  );
};

export default HomePage;
