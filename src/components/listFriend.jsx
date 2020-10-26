import React, { useState } from "react";
import axios from "axios";
import config from "../config";

const ListFriend = (props) => {
  const [friends, setFriends] = useState([]);
  axios.get(`${config.baseUrl}/list-friend`).then((res) => {
    setFriends(res.data.data);
  });

  return (
    <div className="listFriends">
        <h3>Here are your friends...</h3>
    <div className="list">
      {friends.map((friend) => {
        return (
          <div className="card">
            <div className="header">
              <h3>{friend.fullName}</h3>
              <a href="#"><img src="https://img.icons8.com/cotton/2x/edit.png"></img></a>
              <a href="#"><img src="https://img.icons8.com/cute-clipart/2x/delete-sign.png"></img></a>
            </div>
            <div className="content">
              <p>Address:<b>{friend.address}</b></p>
              <p>Contact Number:<b>{friend.contactNumber}</b></p>
              <p>Date of Birth:<b>{friend.dateOfBirth}</b></p>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};
export default ListFriend;
