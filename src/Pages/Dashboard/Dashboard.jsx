import React, { useState } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import Navbar from "../../components/Navbar/Navbar";
import "./Dashboard.css";

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

  // const dashboard = useState("Dashboard");

  return (
    <>
      <Navbar name="Dashboard" />
      <div
        className="content-section"
        style={{
          left: "13rem",
          top: "4rem",
          bottom: "0",
          right: "0",
          padding: "1.25rem",
        }}
      >
        <div className="row">
          <div className="col-lg-0" id="show-col-lg-0">
            <div className="adding-space" style={{ width: "300px" }}></div>
          </div>
          <div
            className="col-lg-12"
            id="show-col-lg-12"
            style={{ marginTop: "90px" }}
          >
            <h3>Dashboard</h3>
            <Table
              columns={columns}
              dataSource={data}
              onChange={onChange}
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
