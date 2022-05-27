import React, { useState } from "react";
import rectangleIcon from "../../image/Rectangle_Icon.svg";
import rectangularIcon from "../../image/Rectangular_Icon.svg";
import menuIcon from "../../image/Menu_Icon.svg";
import homeIcon from "../../image/Home_Icon.svg";
import truckIcon from "../../image/Truck_Icon.svg";
import { Dropdown, Menu, Space } from "antd";
import userPicture from "../../image/User_Picture.jpg";
import { DownOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Navbar.css";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();

  // const [sidebar, setSidebar] = useState(true);

  // const toggleSidebar = () => {
  //   return setSidebar(!sidebar);
  // };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  //   const [name, setName] = useState("Dashboard");

  const navCars = () => {
    navigate("/cars");
  };

  const navDashboard = () => {
    navigate("/dashboard");
  };

  const menu = (
    <Menu
      items={[
        {
          label: <a onClick={handleLogout}>Logout</a>,
          key: "0",
        },
      ]}
    />
  );

  return (
    <div>
      <nav className="navbar position-fixed navbar-expand-lg navbar-light shadow-sm">
        <div className="container-fluid">
          <div className="brand d-flex justify-content-between px-3">
            <Link to="/" className="navbar-brand">
              Navbar
            </Link>
            <button
              onClick={toggleSidebar}
              style={{ backgroundColor: "white", border: "none" }}
            >
              <img src={menuIcon} alt="icon menu" />
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <form className="d-flex ms-5 align-items-center">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-primary border-3 me-3 fw-bold"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item">
                {/* <Dropdown overlay={menu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space
                      style={{
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      <img
                        src={userPicture}
                        alt="user"
                        width="32"
                        height="32"
                        className="rounded-circle me-2"
                        style={{ objectFit: "cover" }}
                      />
                      Ini User
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="sidebar-contaier d-flex"> */}
      {/* <!-- Sidebar - Main Menu --> */}
      <div className="main-menu">
        <a href="#">
          <div className="box text-center d-flex justify-content-center align-items-center">
            <img className="side-icon" src={rectangleIcon} alt="" />
          </div>
        </a>
        <a onClick={navDashboard}>
          <div className="box text-center py-2">
            <img className="side-icon" src={homeIcon} alt="" />
            <div>Dashboard</div>
          </div>
        </a>
        <a onClick={navCars}>
          <div className="box text-center py-2">
            <img className="side-icon" src={truckIcon} alt="" />
            <div>Cars</div>
          </div>
        </a>
      </div>

      {/* <Sidebar show={sidebar} name={props.name} /> */}
    </div>
  );
}

export default Navbar;
