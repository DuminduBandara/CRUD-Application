import React from "react";
import Header from "../components/Header";
import "../css/CreateUser.css";

function CreateUser() {
  return (
    <div className="CreateUser">
      <Header />
      <div className="CreateUser-main">
        <div className="head">
          <h2>Create User</h2>
        </div>
        <div className="form-section">
          <div>
            <label>First name : </label>
            <input type="text" placeholder="First Name"></input>
          </div>
          <div>
            <label>Last name : </label>
            <input type="text" placeholder="last Name"></input>
          </div>
          <div>
            <label>City : </label>
            <input type="text" placeholder="City"></input>
          </div>
          <div>
            <label>Phone Number : </label>
            <input type="text" placeholder="Phone Number"></input>
          </div>
          <div>
            <button className="create-btn" type="submit">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
