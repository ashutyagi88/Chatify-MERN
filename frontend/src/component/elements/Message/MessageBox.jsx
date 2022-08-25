import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import { ChatState } from "../../../context/ChatProvider";
import { Avatar } from "@material-ui/core";
import "../../styles/elements/Misc/scrollablefeed.css";
import { Feed, Chat } from "../../styles/elements/Message/MessageBoxStyles";

function MessageBox({ messages }) {
  const { user } = ChatState();
  const isSameSender = (messages, m, i, userId) => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender._id !== m.sender._id ||
        messages[i + 1].sender._id === undefined) &&
      messages[i].sender._id !== userId
    );
  };

  const isLastMessage = (messages, i, userId) => {
    return (
      i === messages.length - 1 &&
      messages[messages.length - 1].sender._id !== userId &&
      messages[messages.length - 1].sender._id
    );
  };

  const isSameSenderMargin = (message, m, i, userId) => {
    if (
      i < messages.length - 1 &&
      messages[i + 1].sender._id === m.sender._id &&
      messages[i].sender._id !== userId
    ) {
      return 52;
    } else if (
      (i < messages.length - 1 &&
        messages[i + 1].sender._id !== m.sender._id &&
        messages[i].sender._id !== userId) ||
      (i === messages.length - 1 && messages[i].sender._id !== userId)
    ) {
      return 0;
    }
    return "auto";
  };

  const isSameUser = (messages, m, i) => {
    return i > 0 && messages[i - 1].sender._id === m.sender._id;
  };

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <Feed key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Avatar
                src={m.sender.image}
                style={{ marginRight: "10px" }}
              ></Avatar>
            )}
            <Chat
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#44d7b6" : "#ffffff"
                }`,
                color: `${m.sender._id === user._id ? "#cef5eb" : "#252525"}`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i) ? 3 : 10,
              }}
            >
              {m.content}
            </Chat>
          </Feed>
        ))}
    </ScrollableFeed>
  );
}

export default MessageBox;
