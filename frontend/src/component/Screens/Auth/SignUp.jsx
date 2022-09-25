import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import {
  SignInContainer,
  SignInContent,
  SignInLogo,
  SignInStyle,
  Load,
  Logo,
} from "../../styles/Screens/Auth/SignUpStyles";

function SignUp() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !name || !password || !confirmpassword) {
      alert("Enter All the Field");
    } else if (password.length < 6) {
      alert("Password must contain Six chracters");
    } else if (password !== confirmpassword) {
      alert("Password and Confirm Password Should be Same");
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          " https://chatify-app-mern.herokuapp.com/api/user",
          {
            name,
            email,
            password,
            image,
          },
          config
        );

        alert("Registration Successfull");

        localStorage.setItem("userInfo", JSON.stringify(data));
        nav("/chats");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleRedirect = (e) => {
    e.preventDefault();
    nav("/");
  };

  async function picDetails(pics) {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      setLoading(true);
      const formData = new FormData();

      formData.append("file", pics);

      formData.append("upload_preset", "Chatify");

      const data = await fetch(
        "https://api.cloudinary.com/v1_1/tyagiashu88/image/upload",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        });

      setImage(data.secure_url);
      setImageData(data);
      setLoading(false);
    }
  }

  return (
    <SignInStyle>
      <SignInLogo>
        <Logo src="https://i.ibb.co/6tcV4kb/Chatify.png"></Logo>
      </SignInLogo>
      <SignInContainer>
        <SignInContent>
          <form>
            <h3>E-Mail</h3>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <h3>Name</h3>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <h3>Confirm Password</h3>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <h3>Upload your Image</h3>
            <input
              type="file"
              placeholder="Upload your Image"
              accept="image/*"
              onChange={(e) => {
                picDetails(e.target.files[0]);
              }}
            ></input>
            {loading ? (
              <Load>
                <ReactLoading
                  type="spinningBubbles"
                  color="#44d7b6"
                  height={50}
                  width={50}
                ></ReactLoading>
              </Load>
            ) : (
              <></>
            )}
            <button onClick={handleSignup}>Sign Up</button>
          </form>
          <h5 onClick={handleRedirect}>
            Already Have an Account? <span>Sign In</span>
          </h5>
        </SignInContent>
      </SignInContainer>
    </SignInStyle>
  );
}

export default SignUp;
