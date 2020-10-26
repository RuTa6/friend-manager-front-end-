import React,{useState} from "react";
import axios from "axios";
import config from "../config";
const AddFriend=()=>{
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [dob,setDOB]=useState("")
  const onSubmitAddFriend = (ev) => {
    
    const friend = {
        fullName: fullName,
        address: address,
        contactNumber: number,
        dateOfBirth:dob
    };
    axios
      .post(`${config.baseUrl}/add-friend`, friend)
      .then(alert("data sent"));
  }
return(
    <div className="addFriend">
           <h3>Add your Friend here...</h3>
                <input 
                type="text"
                name="txtFName"
                id="txtFName"
                placeholder="Full Name"
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                ></input>
                <br></br>
                <input
                type="text"
                name="txtAddress"
                id="txtAddress"
                placeholder="Address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                ></input>
                <br></br>
                <input
                type="text"
                name="txtNumber"
                id="txtNumber"
                placeholder="Contact Number"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                ></input>
                <br></br>
                <input 
                type="date"
                name="txtDOB"
                id="txtDOB"
                value={dob}
                onChange={(e)=>setDOB(e.target.value)}>
                </input>
                <input 
                type="submit"
                name="btnAdd"
                id="btnAdd"
                value="Add Friend"
                onClick={onSubmitAddFriend}
                ></input>
            
        </div>
)
}

export default AddFriend;