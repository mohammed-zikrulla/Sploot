import "./App.css";
import LoginForm from "./components/LoginForm";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blogs from "./components/Blogs";
import { useSelector, useDispatch } from "react-redux";
import { updateToken } from "./Store";

function App() {
  const token = useSelector((state) => state.Token);
  const dispatch = useDispatch();

  const Token = localStorage.getItem("token");
  console.log(Token);

  // if (localStorage.getItem("token") != null) {
  //   dispatch(updateToken(localStorage.getItem("token")));
  // }

  // useEffect(() => {
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${Token}`;
  // }, [Token]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={token ? <Blogs Token={token} /> : <LoginForm />}
        />
        <Route
          exact
          path="/blogs"
          element={token ? <Blogs Token={token} /> : <LoginForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;
