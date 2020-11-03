import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
const UpdateFriend = ({ token }) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [dob,setDOB]=useState("")
  const { id } = useParams();
  
  useEffect(() => {
    axios({
      url: `${config.baseUrl}/get-friend/${id}`,
      method: "get",
      headers: {
        authentication: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setFullName(res.data.data.fullName);
        setAddress(res.data.data.address);
        setNumber(res.data.data.contactNumber);
        setDOB(res.data.data.dateOfBirth)
      })
      .catch((e) => {
        console.log("something went wrong" + e);
      });
  }, []);

  const onSubmitUpdateFriend = (ev) => {
    const friend = {
      fullName: fullName,
      address: address,
      contactNumber: number,
      dateOfBirth: dob
    };
    axios
      .put(`${config.baseUrl}/update-friend/${id}`, friend)
      .then(alert("data sent"));
  };
  return (
    <div className="addFriend">
      {(token)?(
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Update your friend..</p>
            <Link to="/listFriend">
              <button class="delete" aria-label="close"></button>
            </Link>
          </header>
          <section class="modal-card-body"></section>
          <section class="modal-card-body">
            <input
              type="text"
              name="txtFName"
              id="txtFName"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            ></input>
            <br></br>
            <input
              type="text"
              name="txtAddress"
              id="txtAddress"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
            <br></br>
            <input
              type="text"
              name="txtNumber"
              id="txtNumber"
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
              onChange={(e) => setDOB(e.target.value)}
            ></input>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-success"
              name="btnUpdate"
              id="btnUpdate"
              value=""
              onClick={onSubmitUpdateFriend}
            >
              Update Friend
            </button>
          </footer>
        </div>
      </div>
      
      ):(
        <div>You are not authorized</div>)}
    </div>
  );
};

export default UpdateFriend;
