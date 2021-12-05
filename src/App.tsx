import "antd/dist/antd.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/usersSlice";
import { fetchQuestion } from "./store/questionsSlice";
import { Store } from "./store/store";
import Header from "./components/header/Header";
import HomePage from "./components/pages/HomePage";
import "./App.scss";
import Login from "./components/login/Login";

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
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
    </div>
  );
}
export default App;
