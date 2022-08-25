import React from "react";
import {
  MyChatsContent,
  UserInfo,
} from "../../styles/elements/Chat/MyChatItemStyles";
import { ChatState } from "../../../context/ChatProvider";

function MyChatsItem({ user, loggedUser, latest }) {
  const getSender = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  };

  const { selectedChat, setSelectedChat } = ChatState();

  const handleSelect = (user) => {
    setSelectedChat(user);
  };

  return (
    <MyChatsContent
      onClick={() => handleSelect(user)}
      style={
        selectedChat === user
          ? { backgroundColor: "#262626", color: "#fcfcfc" }
          : { backgroundColor: "#fcfcfc", color: "#262626" }
      }
    >
      <UserInfo>
        <h2>
          {!user.isGroupChat
            ? getSender(loggedUser, user.users)
            : user.chatName}
        </h2>
      </UserInfo>
    </MyChatsContent>
  );
}

export default MyChatsItem;
