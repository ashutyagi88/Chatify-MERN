import styled from "styled-components";

const ChatFrontStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/tyagiashu88/image/upload/v1660924293/Vecteezy_Geometric-Background_Revisi2-Revisi_RW0320_j3v4qt.jpg");
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const ChatContent = styled.div`
  position: absolute;
  display: flex;
  width: 85vw;
  height: 85vh;
  background-color: #fcfcfc;
  align-content: center;
  border-radius: 25px;
`;

export { ChatContent, ChatFrontStyle };
