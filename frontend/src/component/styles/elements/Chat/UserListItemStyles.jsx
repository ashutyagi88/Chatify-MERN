import styled from "styled-components";

const ListItemStyle = styled.div`
  margin: 5px 0px;
  height: 75px;
  width: 75%;
  display: flex;
  align-items: center;
  background-color: #fcfcfc;
  border-radius: 15px;
  cursor: pointer;
  color: #262626;
  transition: all 0.5s;

  :hover {
    background-color: #44d7b6;
  }
`;

const ListItemContent = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UserInfo = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    height: 20px;
    margin: 0;
  }

  h6 {
    height: 20px;
    margin: 0;
  }
`;

export { ListItemContent, ListItemStyle, UserInfo };
