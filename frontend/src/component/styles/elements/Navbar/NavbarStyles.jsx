import styled from "styled-components";

const NavbarStyle = styled.div`
  position: relative;
  height: 100%;
  width: 20vw;
  width: ${(props) => (!props.sidebar ? "7%" : "400px")};
  background-color: #262626;
  display: ${(props) => (!props.group ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 25px 0px 0px 25px;

  svg {
    font-size: 1.75rem;
    cursor: pointer;
    color: #686868;
  }
`;

const Sidebar = styled.div`
  position: relative;
  height: 100%;
  width: 400px;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #262626;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  border-radius: 25px 0px 0px 25px;
`;

const SidebarContent = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SidebarInput = styled.div`
  width: 400px;
  height: 55px;
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  z-index: 99;
  background-color: #262626;

  input {
    width: 50%;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    font-family: "Poppins", sans-serif;
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
  top: 60px;
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

const SearchBtn = styled.button`
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

const CloseBtnSidebar = styled.button`
  position: absolute;
  bottom: 70px;
  right: 40px;
  background: none;
  border: none;

  svg {
    color: #fcfcfc;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 36px;
  margin-left: 50px;
  background: none;
  border: none;

  svg {
    color: #111111;
  }
`;

const Profile = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  top: 10%;
  left: 14.5%;
  width: 400px;
  height: 250px;
  background-color: #44d7b6;
  color: #262626;
  border-radius: 15px;
`;

const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 350px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 175px;
  overflow-wrap: break-word;
`;

const Noti = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  top: 10%;
  left: 14.5%;
  width: 400px;
  height: 250px;
  background-color: #262626;
  color: #fcfcfc;
  border-radius: 15px;
`;

const NotiContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  width: 90%;
  overflow-y: scroll;
  margin-top: 10%;
`;

const NotiDetails = styled.h5`
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #fcfcfc;
  color: #262626;
  margin: 5px;
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.1s;

  :hover {
    background-color: #44d7b6;
    color: #262626;
  }
`;

const GrpButton = styled.button`
  background-color: #262626;
  border: none;

  svg {
    font-size: 1.75rem;
  }
`;

export {
  NavbarStyle,
  Sidebar,
  SidebarContent,
  SidebarInput,
  CloseBtnSidebar,
  Load,
  UserList,
  SearchBtn,
  CloseBtn,
  Profile,
  ProfileContent,
  ProfileDetails,
  Noti,
  NotiContent,
  NotiDetails,
  GrpButton,
};
