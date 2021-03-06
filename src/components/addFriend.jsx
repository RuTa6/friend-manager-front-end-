import React, { useState,useEffect } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import config from "../config";


const AddFriend = ({token}) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDOB] = useState("")
  const [res,setRes]=useState("")
  const onSubmitAddFriend = (ev) => {
    const friend = {
      _id:localStorage.getItem("id"),
      fullName: fullName,
      address: address,
      contactNumber: number,
      dateOfBirth: dob
    };
    axios
      .post(`${config.baseUrl}/add-friend`, friend,{
        headers:{
          authentication: `Bearer ${token}`
        }
      })
      .then((response)=>{
          setRes(response.data.message)
          console.log(res)
       } );
  }
  return (
    <div className="addFriend">
      {res !== "auth error" ?  (
      <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Create a new friend..</p>
            <Link to="/"><button class="delete" aria-label="close"></button></Link>
            
          </header>
          <section class="modal-card-body">
          
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
            
            
          </footer>
        </div>
      </div>
       ):
       (<div> You are not authorized </div>)}
      
    </div>
  )
}

export default AddFriend;