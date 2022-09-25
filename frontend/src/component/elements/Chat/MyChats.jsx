import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ChatState } from "../../../context/ChatProvider";
import MyChatsItem from "./MyChatsItem";
import {
  MyChatContent,
  MyChatsStyle,
} from "../../styles/elements/Chat/MyChatStyles";

function MyChats({ fetchAgain }) {
  const [loggedUser, setLoggedUser] = useState();
  const { user, setChats, chats } = ChatState();

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  const fetchChats = async () => {
    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };
      const { data } = await axios.get(
        "http://localhost:3000/api/chats",
        config
      );
      setChats(data);
    } catch (error) {
      alert("Failed to Load Chat");
    }
  };

  return (
    <MyChatsStyle>
      <MyChatContent>
        {chats ? (
          <>
            {chats.map((chat) => (
              <MyChatsItem
                key={chat._id}
                user={chat}
                loggedUser={loggedUser}
              ></MyChatsItem>
            ))}
          </>
        ) : (
          <></>
        )}
      </MyChatContent>
    </MyChatsStyle>
  );
}

export default MyChats;
