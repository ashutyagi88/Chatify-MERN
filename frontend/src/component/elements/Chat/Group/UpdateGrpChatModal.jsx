import axios from "axios";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import Modal from "react-modal";
import { ChatState } from "../../../../context/ChatProvider";
import "../../../styles/elements/Misc/modalupdate.css";
import ReactLoading from "react-loading";
import UserListItem from "../UserListItem";
import {
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
} from "../../../styles/elements/Chat/Group/UpdateGrpChatModelStyles";

function UpdateGrpChatModal({ fetchAgain, setFetchAgain, fetchMessages }) {
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const { selectedChat, setSelectedChat, user } = ChatState();
  const [isOpen, setIsOpen] = useState(false);
  const [groupChatName, setGroupChatName] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRename = async () => {
    if (!groupChatName) {
      alert("Enter New Name");
    }

    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      const { data } = await axios.put(
        `http://localhost:3000/api/chats/rename`,
        { chatId: selectedChat._id, chatName: groupChatName },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
    } catch (error) {
      alert("Unable to Change The Name");
    }

    setGroupChatName("");
  };

  const handleSearch = async () => {
    if (!search) {
      return;
    } else
      try {
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        const { data } = await axios.get(
          `http://localhost:3000/api/user?search=${search}`,
          config
        );
        setSearchResults(data);
        setSearch("");
        setLoading(false);
      } catch (error) {
        alert("Failed to Load Search Results");
      }
  };

  const handleAddUser = async (userToAdd) => {
    if (selectedChat.users.find((u) => u._id === userToAdd._id)) {
      alert("User is Already in Group");
    }

    if (selectedChat.groupAdmin._id !== user._id) {
      alert("Only Group Admin can Add User");
    }

    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      const { data } = await axios.put(
        `http://localhost:3000/api/chats/groupadd`,
        { chatId: selectedChat._id, userId: userToAdd._id },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
    } catch (error) {
      alert("Unable to Add User");
    }
  };

  const handleRemove = async (userToRemove) => {
    if (
      selectedChat.groupAdmin._id !== user._id &&
      userToRemove._id !== user._id
    ) {
      alert("Only Group Admins can Remove Someone");
    }

    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      const { data } = await axios.put(
        `http://localhost:3000/api/chats/groupremove`,
        { chatId: selectedChat._id, userId: userToRemove._id },
        config
      );

      userToRemove._id === user._id ? setSelectedChat() : setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      fetchMessages();
    } catch (error) {
      alert("Unable to Remove");
    }
  };

  return (
    <>
      <span onClick={toggleModal}>
        <RiPencilFill></RiPencilFill>
      </span>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <ModalStyle>
          <ModalHead>
            <h3>{selectedChat.chatName}</h3>{" "}
          </ModalHead>
          <ModalBody>
            <SelectedList>
              {selectedChat.users.map((user) => (
                <SelectedListItem key={user._id}>
                  <h5>
                    {user.name}{" "}
                    <MdClose
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemove(user)}
                    ></MdClose>
                  </h5>
                </SelectedListItem>
              ))}
            </SelectedList>
            <UpdateName>
              <UpdateInput
                placeholder="New Name"
                onChange={(e) => setGroupChatName(e.target.value)}
                value={groupChatName}
              ></UpdateInput>
              <UpdateBtn onClick={handleRename}>Update Name</UpdateBtn>
            </UpdateName>
            <AddUser>
              <UserInput
                placeholder="Add User"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              ></UserInput>
              <UserSearch onClick={handleSearch}>Search</UserSearch>
            </AddUser>
            <ModalUsers>
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
                <>
                  <UserList>
                    {searchResults?.map((user) => (
                      <UserListItem
                        key={user._id}
                        user={user}
                        handleFunction={() => handleAddUser(user)}
                      ></UserListItem>
                    ))}
                  </UserList>
                </>
              )}
            </ModalUsers>
          </ModalBody>
          <ModalFooter>
            <LeaveBtn onClick={() => handleRemove(user)}>Leave Group</LeaveBtn>
            <CloseBtn onClick={toggleModal}>Close</CloseBtn>
          </ModalFooter>
        </ModalStyle>
      </Modal>
    </>
  );
}

export default UpdateGrpChatModal;
