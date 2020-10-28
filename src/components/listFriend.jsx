import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

const ListFriend = ({ token }) => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios({
      url: `${config.baseUrl}/list-friend`,
      method: "get",
      headers: {
        authentication: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setFriends(res.data.data);
      })
      .catch((e) => {
        console.log("somethinf went wrong");
        console.log(e);
      });
  }, []);

  const deleteFriend = (e) => {
    axios
      .delete(`${config.baseUrl}/delete-friend/${e.target.value}`)
      .then((res) => {
        alert(res);
      });
  };

  return (
    <div className="list">
      <section class="modal-card-body">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="/addFriend">Create Friend</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Friends List
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="columns">
        {friends.map((friend) => {
          return (
            <div className="column is-half">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title">{friend.fullName}</p>
                  <a
                    href="#"
                    className="card-header-icon"
                    aria-label="more options"
                  >
                    <span className="icon">
                      <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div className="card-content">
                  <div className="content">
                    Address:<b>{friend.address}</b>
                    <br></br>
                    Contact Number:<b>{friend.contactNumber}</b>
                    <br></br>
                    Date of Birth:<b>{friend.dateOfBirth}</b>
                  </div>
                </div>
                <footer className="card-footer">
                  <a href="#" className="card-footer-item" value={friend._id}>
                    Edit
                  </a>
                  <a
                    href={deleteFriend}
                    className="card-footer-item"
                    value={friend._id}
                  >
                    Delete
                  </a>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListFriend;
