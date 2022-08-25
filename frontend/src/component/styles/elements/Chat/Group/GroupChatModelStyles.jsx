import styled from "styled-components";

const ModalStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ModalInput = styled.input`
  width: 80%;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

const ModalContent = styled.div`
  height: 30%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ModalUsers = styled.div`
  height: 50%;
  width: 100%;
`;

const ChatCreateBtn = styled.button`
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  background-color: #44d7b6;
  font-weight: 900;

  :hover {
    opacity: 0.9;
  }
`;

const UserSearch = styled.button`
  width: 70%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  background-color: #44d7b6;
  font-weight: 900;

  :hover {
    opacity: 0.9;
  }
`;

const Load = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 88%;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SelectedList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50px;
  overflow-y: scroll;
  h5 {
    display: flex;
    align-items: center;
    border-radius: 15px;
    background-color: #44d7b6;
    color: #262626;
    margin: 0;
    padding: 2px 5px;
  }
`;

const SelectedListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
`;

export {
  ModalContent,
  ModalInput,
  ModalStyle,
  ModalUsers,
  ChatCreateBtn,
  SelectedList,
  SelectedListItem,
  UserList,
  UserSearch,
  Load,
};
