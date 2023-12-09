import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../css/UpdateUser.css";
import axios from "axios";

function UpdateUser() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [city, setcity] = useState("");
  const [mobile, setmobile] = useState("");

  return (
    <div className="UpdateUser">
      <Header />
      <div className="UpdateUser-main">
        <div className="head">
          <h2>Update User</h2>
        </div>
        <div className="form-section">
          <form>
            <div>
              <label>First Name : </label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>Last Name : </label>
              <input
                type="text"
                placeholder="last Name"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>City : </label>
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <label>Phone Number : </label>
              <input
                type="text"
                placeholder="Phone Number"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
                required
              ></input>
            </div>
            <div>
              <button className="create-btn" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
