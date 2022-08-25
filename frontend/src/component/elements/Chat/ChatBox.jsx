import { Avatar } from "@material-ui/core";
import React from "react";
import { MdCall, MdVideocam, MdMic, MdOutlineClose } from "react-icons/md";
import { HiOutlinePaperClip } from "react-icons/hi";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { ChatState } from "../../../context/ChatProvider";
import { useState } from "react";
import UpdateGrpChatModal from "./Group/UpdateGrpChatModal";
import axios from "axios";
import { useEffect } from "react";
import MessageBox from "../Message/MessageBox";
import io from "socket.io-client";
import {
  ChatBoxContent,
  ChatBoxFooter,
  ChatBoxHeader,
  ChatBoxStyle,
  HeaderIcons,
  HeaderInfo,
  Logo,
  LogoImage,
  Send,
  MesInput,
  MessageInput,
} from "../../styles/elements/Chat/ChatBoxStyles";

const ENDPOINT = "https://chatify-mern-app.herokuapp.com";
var socket, selectedChatCompare;

function ChatBox({ fetchAgain, setFetchAgain }) {
  const { selectedChat, user, setSelectedChat, notification, setNotification } =
    ChatState();
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const getSender = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  };

  const getImage = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1].image : users[0].image;
  };

  const handleClose = () => {
    setSelectedChat("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newMessage) {
      alert("Enter Message");
    } else {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };

        setNewMessage("");

        const { data } = await axios.post(
          "/api/message/",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );

        socket.emit("new message", data);
        setMessage([...message, data]);
      } catch (error) {
        alert("Failed to Send Message");
      }
    }
  };

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }

    let lastTypingTime = new Date().getTime();
    var timerlength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerlength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerlength);
  };

  const fetchMessages = async () => {
    if (!selectedChat) {
      return;
    } else {
      try {
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        const { data } = await axios.get(
          `/api/message/${selectedChat._id}`,
          config
        );

        setMessage(data);
        socket.emit("join chat", selectedChat._id);
      } catch (error) {
        alert("Failed to Load Messages");
      }
    }
  };

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          setNotification([newMessageRecieved, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessage([...message, newMessageRecieved]);
      }
    });
  });

  return (
    <ChatBoxStyle>
      {selectedChat ? (
        <>
          <ChatBoxHeader>
            <Avatar
              style={{ width: "3.5rem", height: "3.5rem" }}
              src={getImage(user, selectedChat.users)}
            ></Avatar>
            <HeaderInfo>
              {!selectedChat.isGroupChat ? (
                <>
                  <h3>{getSender(user, selectedChat.users)}</h3>
                </>
              ) : (
                <>
                  <h3>{selectedChat.chatName}</h3>
                </>
              )}
              {isTyping ? <h5>Typing</h5> : <></>}
            </HeaderInfo>
            <HeaderIcons>
              <MdCall></MdCall>
              <MdVideocam></MdVideocam>
              {!selectedChat.isGroupChat ? (
                <></>
              ) : (
                <>
                  <UpdateGrpChatModal
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                    fetchMessages={fetchMessages}
                  ></UpdateGrpChatModal>
                </>
              )}
              <MdOutlineClose onClick={handleClose}></MdOutlineClose>
            </HeaderIcons>
          </ChatBoxHeader>
          <ChatBoxContent>
            <MessageBox messages={message}></MessageBox>
          </ChatBoxContent>
          <ChatBoxFooter>
            <form onSubmit={handleSubmit}>
              <MesInput>
                <HiOutlinePaperClip></HiOutlinePaperClip>
                <MessageInput
                  placeholder="Type Your Message Here"
                  onChange={typingHandler}
                  value={newMessage}
                ></MessageInput>
                <MdMic></MdMic>
              </MesInput>
              <Send type="submit">
                <IoPaperPlaneSharp></IoPaperPlaneSharp>
              </Send>
            </form>
          </ChatBoxFooter>
        </>
      ) : (
        <>
          <LogoImage>
            <Logo src="https://i.ibb.co/6tcV4kb/Chatify.png"></Logo>
          </LogoImage>
        </>
      )}
    </ChatBoxStyle>
  );
}

export default ChatBox;
