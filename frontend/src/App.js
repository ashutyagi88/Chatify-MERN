import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatFront from "./component/Screens/Home/ChatFront";
import SignIn from "./component/Screens/Auth/SignIn";
import SignUp from "./component/Screens/Auth/SignUp";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    document.title = "Chatify | Connecting People";
  });

  axios.defaults.baseURL = "https://chatify-backend-mern.herokuapp.com";

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn></SignIn>}></Route>
        <Route exact path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/chats" element={<ChatFront></ChatFront>}></Route>
      </Routes>
    </div>
  );
}

export default App;
