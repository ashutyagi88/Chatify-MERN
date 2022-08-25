import styled from "styled-components";

const ChatBoxStyle = styled.div`
  width: 50vw;
  border-radius: 0px 25px 25px 0px;
  background-color: #fcfcfc;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const ChatBoxHeader = styled.div`
  width: 95%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
  border-radius: 0px 25px 0px 0px;
  z-index: 10;
  box-shadow: 0px 11px 28px -4px rgba(0, 0, 0, 0.25);
`;

const HeaderInfo = styled.div`
  width: 60%;
  margin-left: 5%;

  h3 {
    margin: 0;
  }

  h5 {
    margin: 0;
  }
`;

const HeaderIcons = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 24%;
  transition: all 0.1s;

  svg {
    font-size: 1.75rem;
    cursor: pointer;
    color: #d5d5da;

    :hover {
      color: #262626;
    }
  }
`;

const UpdateButton = styled.button`
  background-color: #262626;
  border: none;

  svg {
    font-size: 1.75rem;
  }
`;

const ChatBoxContent = styled.div`
  height: 78%;
`;

const ChatBoxFooter = styled.div`
  height: 10%;
  width: 98%;
  padding-left: 2%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0px 0px 25px 0px;
  box-shadow: 0px -11px 28px -4px rgba(0, 0, 0, 0.25);

  form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 98%;
    padding-left: 2%;
  }
`;

const MesInput = styled.div`
  width: 88%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.1s;

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    color: #d5d5da;

    :hover {
      color: #262626;
    }
  }
`;

const MessageInput = styled.input`
  width: 80%;
  padding: 5px;
  padding-left: 10px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: #ebeaea;
  font-family: "Poppins", sans-serif;
`;

const Send = styled.button`
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: none;
  border: none;

  :hover {
    opacity: 0.9;
  }

  svg {
    font-size: 1.75rem;
    padding: 10px;
    background-color: #44d7b6;
    border-radius: 100%;
    cursor: pointer;
  }
`;

const LogoImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0px 25px 25px 0px;
`;

const Logo = styled.img`
  border-radius: 0px 25px 25px 0px;
  width: 100%;
  height: 100%;
`;

export {
  ChatBoxContent,
  ChatBoxFooter,
  ChatBoxHeader,
  ChatBoxStyle,
  HeaderIcons,
  HeaderInfo,
  UpdateButton,
  Logo,
  LogoImage,
  Send,
  MesInput,
  MessageInput,
};
