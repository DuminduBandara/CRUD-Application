import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import "../css/UserList.css";
import { Table, Button } from "antd";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/users/getallUsers");
        setUsers(response.data.users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      align: "center",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
      align: "center",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "mobile",
      key: "mobile",
      align: "center",
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: (_, record) => (
        <>
          <button>Update</button>
          <button>Delete</button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Header />
      <div className="UserList-main">
        <div className="head">
          <h2>Users List</h2>
        </div>
        <div className="s-p">
          <input type="search" placeholder=" Search" />
          <button className="pdf-btn">PDF</button>
        </div>
        <div className="tble-sec">
          <Table
            dataSource={users}
            columns={columns}
            className="user-list-table"
            pagination={{ pageSize: 4 }}
            footer={() => (
              <div className="footer-number">{`Total ${users.length} items`}</div>
            )}
            rowKey={(record) => record._id}
          />
        </div>
      </div>
    </div>
  );
}

export default UserList;
