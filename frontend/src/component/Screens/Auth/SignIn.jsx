import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  SignInContainer,
  SignInLogo,
  SignInStyle,
  SignInContent,
  NewAccBtn,
  Logo,
} from "../../styles/Screens/Auth/SignInStyles";

function SignIn() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      nav("/chats");
    }
  }, [nav]);

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please Fill All the Fields");
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        " https://chatify-app-mern.herokuapp.com/api/user/login",
        {
          email,
          password,
        },
        config
      );

      alert("login successfull");

      localStorage.setItem("userInfo", JSON.stringify(data));
      nav("/chats");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSign = (e) => {
    e.preventDefault();
    console.log("hello");
    nav("/signup");
  };

  return (
    <SignInStyle>
      <SignInLogo>
        <Logo src="https://i.ibb.co/6tcV4kb/Chatify.png"></Logo>
      </SignInLogo>
      <SignInContainer>
        <SignInContent>
          <form>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
          <NewAccBtn onClick={handleSign}>Create New Account</NewAccBtn>
        </SignInContent>
      </SignInContainer>
    </SignInStyle>
  );
}

export default SignIn;
