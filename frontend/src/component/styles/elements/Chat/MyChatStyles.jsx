import styled from "styled-components";

const MyChatsStyle = styled.div`
  position: relative;
  height: 100%;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fcfcfc;
  color: #262626;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const MyChatContent = styled.div`
  height: 90%;
  width: 85%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export { MyChatContent, MyChatsStyle };
