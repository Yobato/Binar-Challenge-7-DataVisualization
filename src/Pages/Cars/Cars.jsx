import { RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import MainMenu from "../../components/MainMenu/MainMenu";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Utility from "../../Utility";
import { FaChevronRight, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import "./Cars.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  // ClockCircleOutlined,
  TeamOutlined,
  SettingOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Alert } from "antd";

function Cars() {
  Utility("Cars");
  //   const cars = useState("Cars");
  const [displaySidebar, setDisplaySidebar] = useState(true);

  const toggleSidebar = () => {
    return setDisplaySidebar(!displaySidebar);
  };

  const navigate = useNavigate();

  const navAdd = () => {
    navigate("/addForm");
  };

  const [dataList, setDataList] = useState([]);

  const handleData = async () => {
    // setDataList([]);

    try {
      const res = await axios("https://rent-car-appx.herokuapp.com/admin/car");
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainMenu />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar show={displaySidebar} name="Cars" />
      <div className="wrapper position-relative">
        <div
          className={`${
            displaySidebar ? "content-sidebar-shown" : "content-sidebar-hidden"
          } content-section`}
          style={{ backgroundColor: "#f4f5f7", height: "100%" }}
        >
          {/* <Alert message="Success Tips" type="success" showIcon closable />; */}
          <div className="row">
            <span style={{ marginBottom: "20px" }}>
              <a style={{ padding: "2px 15px 0px 0px", fontSize: "12pt" }}>
                <b>Cars</b>
              </a>
              <FaChevronRight size="15" />
              <a style={{ padding: "2px 0px 0px 15px", fontSize: "12pt" }}>
                List Car
              </a>
            </span>
          </div>
          <div className="row d-flex">
            <div className="col-lg-6">
              <h4 style={{ marginBottom: "20px" }}>
                <b>List Car</b>
              </h4>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <Button
                style={{
                  backgroundColor: "#2925a0",
                  color: "#FFFF",
                  // padding: "8px, 16px",
                }}
                onClick={navAdd}
              >
                Add New Car
              </Button>
            </div>
          </div>
          <Button className="me-2">All</Button>
          <Button className="me-2">Small</Button>
          <Button className="me-2">Medium</Button>
          <Button className="me-2">Large</Button>
          <div className="container sectionDataList mt-4">
            <div className="row d-flex">
              {dataList?.map((item) => {
                return (
                  <div className="col-lg-4 flex-row my-2">
                    <div className="card h-100" key={item.id}>
                      <div className="card-body">
                        <h5 className="card-title d-flex justify-content-center">
                          <img
                            src={item.image}
                            alt="img-car"
                            style={{
                              width: "270px",
                              height: "240px",
                              justifyContent: "center",
                            }}
                          />
                        </h5>
                        <p>{item.name}</p>
                        <h6>{formatter.format(item.price)}/hari</h6>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <p className="card-text">
                          <TeamOutlined /> 4 Orang
                        </p>
                        <p className="card-text">
                          <SettingOutlined /> Manual
                        </p>
                        <p className="card-text">
                          <CalendarOutlined /> Tahun 2020
                        </p>
                        <div className="d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-danger h-100 me-2"
                            style={{ width: "135pt" }}
                          >
                            <FaRegTrashAlt className="me-3" />
                            Delete
                          </button>
                          <button
                            type="button"
                            className="btn btn-utama h-100 "
                            style={{ width: "135pt" }}
                          >
                            <FaRegEdit className="me-3" />
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cars;
