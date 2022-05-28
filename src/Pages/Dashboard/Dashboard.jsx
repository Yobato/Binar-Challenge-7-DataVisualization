import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";
import MainMenu from "../../components/MainMenu/MainMenu";
import { FaChevronRight } from "react-icons/fa";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  const columns = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: " User Email",
      dataIndex: "name",
    },
    {
      title: "Car",
      dataIndex: "chinese",
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        multiple: 3,
      },
    },
    {
      title: "Start Rent",
      dataIndex: "math",
      sorter: {
        compare: (a, b) => a.math - b.math,
        multiple: 2,
      },
    },
    {
      title: "Finish Rent",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Price",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
    {
      title: "Status",
      dataIndex: "english",
      sorter: {
        compare: (a, b) => a.english - b.english,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: "1",
      no: "1",
      name: "John Brown",
      chinese: 98,
      math: 60,
      english: 70,
    },
    {
      key: "2",
      no: "2",
      name: "Jim Green",
      chinese: 98,
      math: 66,
      english: 89,
    },
    {
      key: "3",
      no: "3",
      name: "Joe Black",
      chinese: 98,
      math: 90,
      english: 70,
    },
    {
      key: "4",
      no: "4",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "5",
      no: "5",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "6",
      no: "6",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "7",
      no: "7",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "8",
      no: "8",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "9",
      no: "9",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
    {
      key: "10",
      no: "10",
      name: "Jim Red",
      chinese: 88,
      math: 99,
      english: 89,
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const [displaySidebar, setDisplaySidebar] = useState(true);
  const toggleSidebar = () => {
    return setDisplaySidebar(!displaySidebar);
  };

  // const dashboard = useState("Dashboard");

  return (
    <>
      <MainMenu />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar show={displaySidebar} name="Dashboard" />
      <div className="wrapper position-relative">
        <div
          className={`${
            displaySidebar ? "content-sidebar-shown" : "content-sidebar-hidden"
          } content-section`}
          style={{ backgroundColor: "#f4f5f7", height: "100vh" }}
        >
          <div className="row">
            <span style={{ marginBottom: "20px" }}>
              <a style={{ padding: "2px 15px 0px 0px", fontSize: "12pt" }}>
                <b>Dashboard</b>
              </a>
              <FaChevronRight size="15" />
              <a style={{ padding: "2px 0px 0px 15px", fontSize: "12pt" }}>
                Dashboard
              </a>
            </span>
          </div>
          <h4 style={{ marginBottom: "20px" }}>
            <b>Dashboard</b>
          </h4>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
