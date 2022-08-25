import React from "react";
import { useState } from "react";
import { ChatState } from "../../../context/ChatProvider";
import ChatBox from "../../elements/Chat/ChatBox";
import MyChats from "../../elements/Chat/MyChats";
import Navbar from "../../elements/Navbar/Navbar";
import {
  ChatContent,
  ChatFrontStyle,
} from "../../styles/Screens/Home/ChatFrontStyles";

function ChatFront() {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <ChatFrontStyle>
      <ChatContent>
        {user && <Navbar></Navbar>}
        {user && <MyChats fetchAgain={fetchAgain}></MyChats>}
        {user && (
          <ChatBox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          ></ChatBox>
        )}
      </ChatContent>
    </ChatFrontStyle>
  );
}

export default ChatFront;
