import React,{useState} from "react";
import axios from "axios";
import config from "../config";
const UpdateFriend=()=>{
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
 
  const onSubmitUpdateFriend = (ev) => {
    
    const friend = {
        fullName: fullName,
        address: address,
        contactNumber: number
    };
    axios
    .put(`${config.baseUrl}/update-friend/5f8cea46b315090f92bb73ca`, friend)
      .then(alert("data sent"));
  }
return(
    <div className="addFriend">
           <h3>Update your friend...</h3>
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
                type="submit"
                name="btnAdd"
                id="btnAdd"
                value="Add Friend"
                onClick={onSubmitUpdateFriend}
                ></input>
            
        </div>
)
}

export default UpdateFriend;