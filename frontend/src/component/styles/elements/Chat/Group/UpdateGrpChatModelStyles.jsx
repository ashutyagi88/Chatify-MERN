import styled from "styled-components";

const ModalStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHead = styled.div`
  width: 80%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody = styled.div`
  height: 85%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
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

const UpdateName = styled.div`
  width: 100%;
  height: 20%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const UpdateInput = styled.input`
  width: 92%;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-family: "Poppins", sans-serif;
`;

const UpdateBtn = styled.button`
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

const AddUser = styled.div`
  width: 100%;
  height: 20%;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const UserInput = styled.input`
  width: 92%;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-family: "Poppins", sans-serif;
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

const ModalUsers = styled.div`
  height: 30%;
  width: 100%;
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
  margin-top: 10px;
  height: 80%;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const LeaveBtn = styled.button`
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

const CloseBtn = styled.button`
  margin-left: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  background-color: red;
  color: #fcfcfc;
  font-weight: 900;

  :hover {
    opacity: 0.9;
  }
`;

export {
  ModalBody,
  ModalFooter,
  ModalHead,
  ModalStyle,
  ModalUsers,
  SelectedList,
  SelectedListItem,
  UpdateBtn,
  UpdateInput,
  UpdateName,
  UserInput,
  AddUser,
  UserSearch,
  UserList,
  LeaveBtn,
  CloseBtn,
  Load,
};
