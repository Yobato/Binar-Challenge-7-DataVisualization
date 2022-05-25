import React, { useState } from "react";
import rectangleIcon from "../../image/Rectangle_Icon.svg";
import rectangularIcon from "../../image/Rectangular_Icon.svg";
import menuIcon from "../../image/Menu_Icon.svg";
import homeIcon from "../../image/Home_Icon.svg";
import truckIcon from "../../image/Truck_Icon.svg";
import { Dropdown, Menu, Space } from "antd";
import userPicture from "../../image/User_Picture.jpg";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Navbar.css";

function Navbar(props) {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    return setSidebar(!sidebar);
  };

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
      <nav
        className="navbar navbar-expand-lg border-bottom ms-5"
        style={{ position: "fixed", top: 0, left: 0, right: 0 }}
      >
        <div className="container-fluid">
          <div className="sidebar-toggler ps-5">
            <a href="#">
              <img
                className="ms-5 me-5 collapseSidebar"
                src={rectangularIcon}
                alt="icon"
              />
            </a>
            <button
              className="btn ms-5"
              id="toggleSidebar"
              onClick={toggleSidebar}
            >
              <img src={menuIcon} alt="icon menu" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <form className="d-flex ms-5">
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
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ marginTop: "10px", marginLeft: "10px" }}>
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
                </Dropdown>
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

      <Sidebar show={sidebar} name={props.name} />
    </div>
  );
}

export default Navbar;
