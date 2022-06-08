import { Card } from "antd";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import checkList from "../../image/ceklist2.png";
import rectangle from "../../image/Rectangle36.png";
import success from "../../image/success.png";
import pdf from "../../doc/tes.pdf";
import { Worker } from "@react-pdf-viewer/core";
// import { Document, Page } from "react-pdf";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { BsDownload } from "react-icons/bs";

import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useNavigate } from "react-router-dom";

function Transaction() {
  const getFilePluginInstance = getFilePlugin();
  const { Download } = getFilePluginInstance;

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
      <div>
        <NavbarHome />
        <div className="navigation" style={{ backgroundColor: "#F1F3FF" }}>
          <div className="container" style={{ paddingTop: "60pt" }}>
            <div className="row d-flex">
              <div className="col-lg-1">
                <button
                  width="24px"
                  style={{ border: "none", backgroundColor: "#F1F3FF" }}
                  onClick={navHome}
                >
                  <FaArrowLeft />
                </button>
              </div>
              <div className="col-lg-7">
                <p>Tiket</p>
                <p>Order ID</p>
              </div>
              <div className="col-lg-4">
                <span>
                  <img
                    src={checkList}
                    alt="check"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Pilih metode
                  <img
                    src={rectangle}
                    alt="line"
                    style={{ margin: "0 10px" }}
                  />
                  <img
                    src={checkList}
                    alt="check"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Bayar
                  <img
                    src={rectangle}
                    alt="line"
                    style={{ margin: "0 10px" }}
                  />
                  <img
                    src={checkList}
                    alt="check"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  Tiket
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container vh-90 p-5">
          <div className="row d-flex justify-content-center">
            <img src={success} alt="" style={{ width: "80px" }} />
            <p
              style={{
                paddingTop: 10,
                fontSize: 18,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Pembayaran Berhasil!
            </p>
            <p
              style={{
                paddingTop: 5,
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Tunjukkan invoice ini ke petugas BCR di titik temu.
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <Card
              style={{
                width: 605,
              }}
            >
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    <b>Invoice</b>
                  </p>
                  <p>
                    <b>*no invoice</b>
                  </p>
                </div>
                <div className="col-sm-6 d-flex justify-content-end">
                  <Download>
                    {(props: RenderDownloadProps) => (
                      <button
                        style={{
                          width: "100px",
                          height: "40px",
                          color: "#0D28A6",
                          borderColor: "#0D28A6",
                          backgroundColor: "#FFFF",
                        }}
                        onClick={props.onClick}
                      >
                        <BsDownload /> Unduh
                      </button>
                    )}
                  </Download>
                </div>
              </div>
              <div
                className="row"
                style={{
                  height: "550px",
                }}
              >
                <Viewer fileUrl={pdf} plugins={[getFilePluginInstance]} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Worker>
  );
}

export default Transaction;
