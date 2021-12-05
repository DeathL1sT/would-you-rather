import React from "react";
import QuestionBoll from "../cards/QuestionBoll";

import QuestionTable from "../tabQuestion/QuestionTable";
import "./home.scss";
const HomePage = () => {
  return (
    <main>
      <QuestionTable />
      <QuestionBoll />
    </main>
  );
};

export default HomePage;
