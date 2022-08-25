import React from "react";
import Modal from "react-modal";
import "../../../styles/elements/Misc/modal.css";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { ChatState } from "../../../../context/ChatProvider";
import axios from "axios";
import UserListItem from "../UserListItem";
import ReactLoading from "react-loading";
import {
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
} from "../../../styles/elements/Chat/Group/GroupChatModelStyles";

function GroupChatModal({ children }) {
  Modal.setAppElement("#root");
  const [groupChatName, setGroupChatName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { user, chats, setChats } = ChatState();
  const [loading, setLoading] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleSearch = async () => {
    if (!search) {
      return;
    } else
      try {
        setLoading(true);
        const config = { headers: { Authorization: `Bearer ${user.token}` } };

        const { data } = await axios.get(`/api/user?search=${search}`, config);
        setSearchResults(data);
        setSearch("");
        setLoading(false);
      } catch (error) {
        alert("Failed to Load Search Results");
      }
  };

  const handleSubmit = async () => {
    if (!groupChatName || !selectedUsers) {
      alert("Please Fill All the fields");
    }

    try {
      const config = { headers: { Authorization: `Bearer ${user.token}` } };

      const { data } = await axios.post(
        "/api/chats/group",
        {
          name: groupChatName,
          users: JSON.stringify(selectedUsers.map((user) => user._id)),
        },
        config
      );
      setChats([data, ...chats]);
      setIsOpen(false);
    } catch (error) {
      alert("Group not Created");
    }
  };

  const handleDelete = (delUser) => {
    setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
  };

  const handleGroup = (userToAdd) => {
    if (selectedUsers.includes(userToAdd)) {
      alert("User Already Added");
    }

    setSelectedUsers([...selectedUsers, userToAdd]);
  };

  return (
    <>
      <span onClick={toggleModal}>{children}</span>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <ModalStyle>
          <MdClose
            style={{ position: "relative", left: "45%", fontSize: "2rem" }}
            onClick={toggleModal}
          ></MdClose>
          <ModalContent>
            <ModalInput
              placeholder="Group Name"
              onChange={(e) => setGroupChatName(e.target.value)}
            ></ModalInput>
            <ModalInput
              placeholder="Add User"
              onChange={(e) => setSearch(e.target.value)}
            ></ModalInput>
            <UserSearch onClick={handleSearch}>Search</UserSearch>
          </ModalContent>
          <SelectedList>
            {selectedUsers.map((user) => (
              <SelectedListItem key={user._id}>
                <h5 key={user._id}>
                  {user.name}{" "}
                  <MdClose
                    style={{ cursor: "pointer" }}
                    onClick={() => handleDelete(user)}
                  ></MdClose>
                </h5>
              </SelectedListItem>
            ))}
          </SelectedList>
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
                      handleFunction={() => handleGroup(user)}
                    ></UserListItem>
                  ))}
                </UserList>
              </>
            )}
          </ModalUsers>
          <ChatCreateBtn onClick={handleSubmit}>Create Chat</ChatCreateBtn>
        </ModalStyle>
      </Modal>
    </>
  );
}

export default GroupChatModal;
