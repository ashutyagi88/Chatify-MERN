import styled from "styled-components";

const SignInStyle = styled.div`
  display: flex;
`;

const SignInLogo = styled.div`
  width: 55%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 100%;
  height: 100vh;
`;

const SignInContainer = styled.div`
  width: 45%;
  display: flex;
  justify-items: center;
  align-items: center;
`;

const SignInContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 80%;
  height: 90%;
  border-radius: 75px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  line-height: 90%;

  form {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;

    input {
      outline: none;
      padding: 10px;
      width: 20vw;
      border-radius: 15px;
      border: none;
      background-color: lightgrey;
      color: #252525;
      font-size: 1.2rem;
      text-align: center;
    }

    button {
      padding: 10px;
      border-radius: 15px;
      border: none;
      opacity: 0.9;
      background-color: #44d7b6;
      font-size: 1.2rem;
      font-weight: 600;
      margin-top: 30px;
      cursor: pointer;
      font-family: "Poppins", sans-serif;

      &:hover {
        opacity: 1;
      }
    }
  }

  h5 {
    &:hover {
      cursor: pointer;
      text-decoration: underline;

      span {
        color: #44d7b6;
      }
    }
  }
`;

const Load = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
`;

export { SignInContainer, SignInContent, SignInLogo, SignInStyle, Load, Logo };
