import React, { useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import MainMenu from "../../components/MainMenu/MainMenu";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./FormAdd.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormAdd() {
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const toggleSidebar = () => {
    return setDisplaySidebar(!displaySidebar);
  };

  const notify = () =>
    toast.success("Data Berhasil Disimpan", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const navigate = useNavigate();

  const navCars = () => {
    navigate("/cars");
  };

  const [nama, setNama] = useState(null);
  const [harga, setHarga] = useState(null);

  const [gambar, setGambar] = useState(null);

  const handleData = async () => {
    if (!nama || !harga) {
      return alert("Please fill all the fields!");
    }

    const formData = new FormData();
    formData.append("name", nama);
    formData.append("category", "small");
    formData.append("price", harga);
    formData.append("status", true);
    formData.append("image", gambar);

    console.log(gambar.name);

    try {
      const res = await axios({
        method: "POST",
        url: "https://rent-car-appx.herokuapp.com/admin/car",
        data: formData,
      });

      if (res.status === 201) {
        navigate("/cars");
      }
    } catch (error) {
      console.log(error);
      return alert("Store data failed");
    }
  };

  return (
    <div>
      <MainMenu />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar show={displaySidebar} name="Cars" />
      <div className="wrapper position-relative">
        <div
          className={`${
            displaySidebar ? "content-sidebar-shown" : "content-sidebar-hidden"
          } content-section`}
          style={{ backgroundColor: "#f4f5f7", height: "100vh" }}
        >
          <div className="container pt-4">
            <div className="row">
              <div className="col-12">
                <div className="sub-tree d-flex mt-3 mb-3">
                  <a href="cars">
                    <p className="fw-bold">Cars</p>
                  </a>
                  <FaChevronRight size="15" style={{ margin: "3px 15px" }} />
                  <a href="/Cars">
                    <p className="fw-bold">List Car</p>
                  </a>
                  <FaChevronRight size="15" style={{ margin: "3px 15px" }} />
                  <a href="#">
                    <p>Add New Car</p>
                  </a>
                </div>
                <h4 style={{ marginBottom: "20px" }}>
                  <b>Add New Car</b>
                </h4>

                <div className="form-body">
                  <div className="card p-2">
                    <div className="card-body">
                      <form>
                        <div className="row mb-3">
                          <div className="col-lg-3">
                            <label for="inputName" className="col-form-label">
                              Nama
                            </label>
                            <label for="wajib" style={{ color: "red" }}>
                              *
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              id="inputNama6"
                              className="form-control"
                              placeholder="Nama"
                              // value={storedData.name}
                              onChange={(e) => setNama(e.target.value)}
                            />
                            <small
                              id="namaHelp"
                              className="form-text text-muted"
                            ></small>
                          </div>
                        </div>

                        <div className="row  mb-3">
                          <div className="col-lg-3">
                            <label
                              for="inputPassword6"
                              className="col-form-label"
                            >
                              Harga
                            </label>
                            <label for="wajib" style={{ color: "red" }}>
                              *
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <input
                              type="text"
                              id="inputHarga6"
                              className="form-control"
                              placeholder="Harga"
                              // value={storedData.price}
                              onChange={(e) => setHarga(e.target.value)}
                            />
                            <small
                              id="hargaHelp"
                              className="form-text text-muted"
                            ></small>
                          </div>
                        </div>

                        <div className="row  mb-3">
                          <div className="col-lg-3">
                            <label for="inputFoto6" className="col-form-label">
                              Foto
                            </label>
                            <label for="wajib" style={{ color: "red" }}>
                              *
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <div className="input-group">
                              <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                style={{ display: "none" }}
                                onChange={(e) => setGambar(e.target.files[0])}
                                placeholder="No file selected"
                              />
                              <label
                                for="formFile"
                                id="file-input"
                                className="form-control icon text-secondary"
                              >
                                {gambar === null ? "Pilih gambar" : gambar.name}
                              </label>
                              <span className="input-group-text">
                                <img
                                  src="../public/images/Upload_Icon.png"
                                  alt=""
                                />
                              </span>
                            </div>
                            <small
                              id="fileHelp"
                              className="form-text text-muted"
                              style={{ marginLeft: "1px" }}
                            >
                              File size max. 2 MB
                            </small>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-lg-3">
                            <label
                              for="inputStartRent6"
                              className="col-form-label"
                            >
                              Start Rent
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <span> - </span>
                            <span className="error-notif"></span>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-lg-3">
                            <label
                              for="inputFinishRent6"
                              className="col-form-label"
                            >
                              Finish Rent
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <span> - </span>
                            <span className="error-notif"></span>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-lg-3">
                            <label
                              for="inputCreatedRent6"
                              className="col-form-label"
                            >
                              Created Rent
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <span> - </span>
                            <span className="error-notif"></span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3">
                            <label
                              for="inputUpdatedRent6"
                              className="col-form-label"
                            >
                              Updated Rent
                            </label>
                          </div>
                          <div className="col-lg-9">
                            <span> - </span>
                            <span className="error-notif"></span>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-form pt-4">
              <button type="button" className="btn-custom" onClick={navCars}>
                Cancel
              </button>
              <button
                type="button"
                className="btn-custom-save"
                onClick={(e) => {
                  e.preventDefault();
                  handleData();
                  notify();
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAdd;
