import styled from "styled-components";

const Feed = styled.div`
  display: flex;
  width: 90%;
  height: 8%;
  font-weight: 800;
  margin: 0 auto;
`;

const Chat = styled.span`
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 25px;
  max-width: 75%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
`;

export { Feed, Chat };
