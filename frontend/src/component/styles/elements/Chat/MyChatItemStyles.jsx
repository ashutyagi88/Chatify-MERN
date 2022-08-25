import styled from "styled-components";

const MyChatsContent = styled.div`
  height: 150px;
  width: 95%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  cursor: pointer;
`;

const UserInfo = styled.div`
  height: 50px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Message = styled.div`
  width: 80%;
  height: 50px;
  line-height: 1rem;
  font-size: 0.8rem;
  overflow-wrap: break-word;
`;

export { Message, MyChatsContent, UserInfo };
