import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import { Link } from "react-router-dom";

const ListFriend = ({ token }) => {
  const [friends, setFriends] = useState({});

  useEffect(() => {
    axios({
      url: `${config.baseUrl}/list-friend`,
      method: "get",  
      headers:{
        authentication: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setFriends(res.data.data);      
      })
      .catch((e) => {
        console.log("something went wrong" + e);
      });
  }, []);

  const deleteFriend = (e) => {
    console.log(e.target.value);
    axios({
      url: `${config.baseUrl}/delete-friend/${e.target.value}`,
      method: "delete",
      
    })
      .then((res) => {
        alert("deleted");
      })
      .catch((e) => {
        console.log("error" + e);
      });
  };
  return (
    <div className="list">
      {friends !== "auth error" ?  (
      <div className="columns">
        {Object.keys(friends).map((friendArray) => {
            const friend= friends[friendArray]
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
                    Number:<b>{friend.contactNumber}</b>
                    <br></br>
                    Birth Day:<b>{friend.dateOfBirth}</b>
                  </div>
                </div>
                <footer className="card-footer">
                  <Link to={`/updateFriend/${friend._id}`}>
                    <button className="card-footer-item button is-primary" value={friend._id}>
                      Edit Friend
                    </button>
                  </Link>
                  <button
                    className="card-footer-item button is-primary"
                    value={friend._id}
                    onClick={deleteFriend}
                  >
                    Delete
                  </button>
                </footer>
              </div>
            </div>
          );
        })}
        
      </div>
     ):
     (<div> You are not authorized </div>)}
    </div>
  );
};
export default ListFriend;
