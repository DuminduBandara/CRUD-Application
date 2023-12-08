import React, { useState } from "react";
import Header from "../components/Header";
import "../css/CreateUser.css";
import axios from "axios";

function CreateUser() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [city, setcity] = useState("");
  const [mobile, setmobile] = useState("");

  const createNewUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/createUser", {
        firstName,
        lastName,
        city,
        mobile,
      });

      console.log(response.data);

      //reset input fields after successfully create user
      setfirstName("");
      setlastName("");
      setcity("");
      setmobile("");
    } catch (error) {
      console.log("error creating user", error);
    }
  };

  return (
    <div className="CreateUser">
      <Header />
      <div className="CreateUser-main">
        <div className="head">
          <h2>Create User</h2>
        </div>
        <div className="form-section">
          <form>
            <div>
              <label>First name : </label>
              <input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => {
                  setfirstName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>Last name : </label>
              <input
                type="text"
                placeholder="last Name"
                required
                value={lastName}
                onChange={(e) => {
                  setlastName(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>City : </label>
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => {
                  setcity(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label>Phone Number : </label>
              <input
                type="text"
                placeholder="Phone Number"
                required
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <button
                className="create-btn"
                type="submit"
                onClick={createNewUser}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
