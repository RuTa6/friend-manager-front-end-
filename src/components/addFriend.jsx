import React, { useState,useEffect } from "react";
import axios from "axios";
import config from "../config";
import { Redirect } from "react-router";
const AddFriend = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDOB] = useState("")
  const [token,setToken]=useState("")
  useEffect(() => {
    const token1 = localStorage.getItem("loginToken");
    if (token1) {
      setToken(token1);
    } else {
      return <Redirect to="/"></Redirect>
    }
  }, []);

  const onSubmitAddFriend = (ev) => {
    const friend = {
      fullName: fullName,
      address: address,
      contactNumber: number,
      dateOfBirth: dob
    };
    axios
      .post(`${config.baseUrl}/add-friend`, friend)
      .then(alert("data sent"));
  }
  return (
    <div className="addFriend">
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            {/* <p class="modal-card-title">Create a new friend..</p> */}
            <button class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li><a href="/list-friend">Friends List</a></li>
                <li class="is-active"><a href="#" aria-current="page">Create Friend</a></li>
              </ul>
            </nav>
          </section>
          <section class="modal-card-body">
            <input
              type="text"
              name="txtFName"
              id="txtFName"
              placeholder="Full Name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <br></br>
            <input
              type="text"
              name="txtAddress"
              id="txtAddress"
              placeholder="Address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <br></br>
            <input
              type="text"
              name="txtNumber"
              id="txtNumber"
              required
              placeholder="Contact Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
            <br></br>
            <input
              type="date"
              name="txtDOB"
              id="txtDOB"
              required
              value={dob}
              onChange={(e) => setDOB(e.target.value)}>
            </input>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success"
              name="btnAdd"
              id="btnAdd"
              value="Add Friend"
              onClick={onSubmitAddFriend}>
              Create Friend
            </button>
            
            {/* <button class="button">Cancel</button> */}
          </footer>
        </div>
      </div>





    </div>
  )
}

export default AddFriend;