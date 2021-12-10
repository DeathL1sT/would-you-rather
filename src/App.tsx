import "antd/dist/antd.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/usersSlice";
import { fetchQuestion } from "./store/questionsSlice";
import { Store } from "./store/store";
import Header from "./components/header/Header";
import "./App.scss";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuestionTable from "./components/tabQuestion/QuestionTable";
import HomePage from "./components/pages/HomePage";
import CreateQuestion from "./components/tabQuestion/CreateQuestion";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Ero from "./components/pages/Erorr";
import QuestionBoll from "./components/cards/QuestionBoll";
import QuestionResult from "./components/cards/QuestionResult";
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: Store) => state.auth.user !== "");
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchQuestion());
  }, []);

  if (!isLoggedIn) {
    return <Login />;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createquestion" element={<CreateQuestion />} />
        <Route path="/question/:questionId" element={<QuestionBoll />} />
        <Route path="/result/:questionId" element={<QuestionResult />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="*" element={<Ero />} />
      </Routes>
    </Router>
  );
}
export default App;
