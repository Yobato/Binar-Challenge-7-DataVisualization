import React from "react";

function FormAdd() {
  return (
    <div>
      <section id="page-5">
        <div className="container pt-4">
          <div className="row">
            <div className="col-12">
              <div className="sub-tree d-flex mt-3 mb-3">
                <a href="cars">
                  <p className="fw-bold">Cars</p>
                </a>
                <i className="fa fa-solid fa-chevron-right mx-2"></i>
                <a href="#">
                  <p className="fw-bold">List Car</p>
                </a>
                <i className="fa fa-solid fa-chevron-right mx-2"></i>
                <a href="#">
                  <p>Add New Car</p>
                </a>
              </div>
              <h2>Add New Car</h2>
              <div className="form-body">
                <form>
                  <div className="row">
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
                      />
                      <small
                        id="namaHelp"
                        className="form-text text-muted"
                      ></small>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <label for="inputPassword6" className="col-form-label">
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
                      />
                      <small
                        id="hargaHelp"
                        className="form-text text-muted"
                      ></small>
                    </div>
                  </div>

                  <div className="row">
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
                          onchange="getNameFile(this.value)"
                        />
                        <label
                          for="formFile"
                          id="file-input"
                          className="form-control icon text-secondary"
                        >
                          No file selected
                        </label>
                        <span className="input-group-text">
                          <img src="../public/images/Upload_Icon.png" alt="" />
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

                  <div className="row">
                    <div className="col-lg-3">
                      <label for="inputStartRent6" className="col-form-label">
                        Start Rent
                      </label>
                    </div>
                    <div className="col-lg-9">
                      <span> - </span>
                      <span className="error-notif"></span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <label for="inputFinishRent6" className="col-form-label">
                        Finish Rent
                      </label>
                    </div>
                    <div className="col-lg-9">
                      <span> - </span>
                      <span className="error-notif"></span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <label for="inputCreatedRent6" className="col-form-label">
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
                      <label for="inputUpdatedRent6" className="col-form-label">
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
          <div className="footer-form">
            <button type="button" className="btn-custom">
              Cancel
            </button>
            <button type="button" className="btn-custom-save">
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FormAdd;
