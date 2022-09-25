import React from "react";
import { Avatar } from "@material-ui/core";
import { BiSearchAlt } from "react-icons/bi";
import {
  MdGroupAdd,
  MdOutlineNotificationsNone,
  MdClose,
  MdLogout,
  MdNotificationsActive,
} from "react-icons/md";
import { useState } from "react";
import { ChatState } from "../../../context/ChatProvider";
import { useNavigate } from "react-router";
import axios from "axios";
import ReactLoading from "react-loading";
import UserListItem from "../Chat/UserListItem";
import GroupChatModal from "../Chat/Group/GroupChatModal";
import {
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
} from "../../styles/elements/Navbar/NavbarStyles";

function Navbar() {
  const [box, setBox] = useState(false);
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [noti, setNoti] = useState(false);
  const nav = useNavigate();
  const {
    user,
    setSelectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();
  const [loading, setLoading] = useState(false);

  const getSender = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  };

  const handleProfile = (e) => {
    e.preventDefault();
    setProfile(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setBox(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setBox(false);
    setProfile(false);
    setNoti(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    nav("/");
  };

  const handleSidebarSearch = async (e) => {
    if (!search) {
      alert("Enter Name or Email");
    }

    try {
      setLoading(true);
      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      const { data } = await axios.get(
        ` https://chatify-app-mern.herokuapp.com/api/user?search=${search}`,
        config
      );

      setLoading(false);
      setSearchResult(data);
      setSearch("");
    } catch (error) {
      alert("Failed to Load Search Results");
    }
  };

  const accessChat = async (userId) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post(
        " https://chatify-app-mern.herokuapp.com/api/chats",
        { userId },
        config
      );

      console.log(data);

      if (!chats.find((c) => c._id === data._id)) {
        setChats([data, ...chats]);
      }

      setSelectedChat(data);
      setBox(false);
    } catch (error) {
      alert("Error in Fetching Chat");
    }
  };

  const handleNoti = () => {
    setNoti(true);
  };

  return (
    <>
      <NavbarStyle sidebar={box}>
        {!box ? (
          <>
            <Avatar
              src={user.image}
              style={{ cursor: "pointer" }}
              onClick={handleProfile}
            ></Avatar>
            {notification.length === 0 ? (
              <MdOutlineNotificationsNone
                onClick={handleNoti}
              ></MdOutlineNotificationsNone>
            ) : (
              <MdNotificationsActive
                onClick={handleNoti}
              ></MdNotificationsActive>
            )}
            <BiSearchAlt onClick={handleSearch}></BiSearchAlt>
            <GroupChatModal>
              <GrpButton>
                <MdGroupAdd></MdGroupAdd>
              </GrpButton>
            </GroupChatModal>
            <MdLogout onClick={handleLogout}></MdLogout>
          </>
        ) : (
          <>
            <Sidebar>
              <SidebarContent>
                <SidebarInput>
                  <CloseBtnSidebar onClick={handleClose}>
                    <MdClose></MdClose>
                  </CloseBtnSidebar>
                  <input
                    placeholder="Enter Name or Email"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  ></input>
                  <SearchBtn onClick={handleSidebarSearch}>Search</SearchBtn>
                </SidebarInput>
                {loading ? (
                  <Load>
                    <ReactLoading
                      type="spinningBubbles"
                      color="#44d7b6"
                      height={100}
                      width={100}
                    ></ReactLoading>
                  </Load>
                ) : (
                  <UserList>
                    {searchResult?.map((user) => (
                      <UserListItem
                        key={user._id}
                        user={user}
                        handleFunction={() => accessChat(user._id)}
                      ></UserListItem>
                    ))}
                  </UserList>
                )}
              </SidebarContent>
            </Sidebar>
          </>
        )}
      </NavbarStyle>
      {!profile ? (
        <></>
      ) : (
        <>
          <Profile>
            <CloseBtn onClick={handleClose}>
              <MdClose></MdClose>
            </CloseBtn>
            <ProfileContent>
              <Avatar
                src={user.image}
                style={{
                  cursor: "pointer",
                  width: "100px",
                  height: "100px",
                  margin: "50px",
                }}
              ></Avatar>
              <ProfileDetails>
                <h1>{user.name}</h1>
                <h5>{user.email}</h5>
              </ProfileDetails>
            </ProfileContent>
          </Profile>
        </>
      )}
      {!noti ? (
        <></>
      ) : (
        <>
          <Noti>
            <CloseBtn onClick={handleClose}>
              <MdClose></MdClose>
            </CloseBtn>
            <NotiContent>
              {!notification.length && "No New Message"}
              {notification.map((notif) => (
                <NotiDetails
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message from ${notif.chat.chatName}`
                    : `New Message from ${getSender(user, notif.chat.users)}`}
                </NotiDetails>
              ))}
            </NotiContent>
          </Noti>
        </>
      )}
    </>
  );
}

export default Navbar;
