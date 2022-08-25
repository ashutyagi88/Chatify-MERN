import { Avatar } from "@material-ui/core";
import React from "react";
import {
  ListItemContent,
  ListItemStyle,
  UserInfo,
} from "../../styles/elements/Chat/UserListItemStyles";

function UserListItem({ user, handleFunction }) {
  return (
    <ListItemStyle onClick={handleFunction}>
      <ListItemContent>
        <Avatar
          src={user.image}
          style={{ width: "50px", height: "50px" }}
        ></Avatar>
        <UserInfo>
          <h5>{user.name}</h5>
          <h6>{user.email}</h6>
        </UserInfo>
      </ListItemContent>
    </ListItemStyle>
  );
}

export default UserListItem;
