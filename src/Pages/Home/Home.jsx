import React from "react";
import CarLanding from "../../image/img_car.png";
import "./Home.css";
import servicePNG from "../../image/img_service.png";
import servicePNG2 from "../../image/img_service_2.png";
import cekList from "../../image/ceklist.png";
import Complete from "../../image/icon_complete.png";
import Price from "../../image/icon_price.png";
import Hrs from "../../image/icon_24hrs.png";
import Profesional from "../../image/icon_professional.png";
import { Collapse, Space } from "antd";
import Footer from "../../components/Footer/Footer";
const { Panel } = Collapse;

function Home() {
  return (
    <div>
      <div id="halaman-1" className="halaman-1">
        <div className="container-fluid pt-5">
          <div className="row d-flex align-items-center mt-5">
            <div className="col-lg-6">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h1
                    className="judul"
                    style={{
                      fontSize: "36px",
                      lineHeight: "54px",
                      maxWidth: "568px",
                    }}
                  >
                    Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                  </h1>
                  <p style={{ fontSize: "14px" }}>
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil
                    kualitas terbaik dengan harga terjangkau. Selalu siap
                    melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                  </p>
                  <button className="btn btn-utama mb-4 fw-bold">
                    Mulai Sewa Mobil
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-0 m-0">
              <img src={CarLanding} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="halaman-2" className="halaman-2">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className=" col-lg-6 d-flex justify-content-center justify-content-lg-start">
              <div className="content-3">
                <img
                  src={servicePNG}
                  id="service_img"
                  className="ms-0 img-fluid ps-0 mb-md-3"
                  alt=""
                />
                <img
                  src={servicePNG2}
                  id="service_img_2"
                  className="ms-0 img-fluid ps-0 mb-md-3"
                  style={{ display: "none" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
              <div className="content-4">
                <h1 className="heading">
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h1>
                <p>
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <ul className="list-group">
                  <li className="mb-3">
                    <img src={cekList} className="me-3" alt="" />
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </li>
                  <li className="mb-3">
                    <img src={cekList} className="me-3" alt="" />
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </li>
                  <li className="mb-3">
                    <img src={cekList} className="me-3" alt="" />
                    Sewa Mobil Jangka Panjang Bulanan
                  </li>
                  <li className="mb-3">
                    <img src={cekList} className="me-3" alt="" />
                    Gratis Antar - Jemput Mobil di Bandara
                  </li>
                  <li className="mb-3">
                    <img src={cekList} className="me-3" alt="" />
                    Layanan Airport Transfer / Drop In Out
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="halaman-3" className="halaman-3">
        <div className="container">
          <h1 className="heading">Why Us?</h1>
          <p>Mengapa harus pilih Binar Car Rental?</p>
          <div className="row mt-2">
            <div className="col-lg-3 my-2">
              <div className="card h-100 p-3">
                <div className="card-body p-4 h-100">
                  <img src={Complete} alt="..." style={{ width: "32px" }} />
                  <h5 className="title card-title my-3">Mobil Lengkap</h5>
                  <p className="card-text">
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 my-2">
              <div className="card h-100 p-3">
                <div className="card-body p-4 h-100">
                  <img src={Price} alt="..." style={{ width: "32px" }} />
                  <h5 className="title card-title my-3">Harga Murah</h5>
                  <p className="card-text">
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 my-2">
              <div className="card h-100 p-3">
                <div className="card-body p-4 h-100">
                  <img src={Hrs} alt="..." style={{ width: "32px" }} />
                  <h5 className="title card-title my-3">Layanan 24 Jam</h5>
                  <p className="card-text">
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 my-2">
              <div className="card h-100 p-3">
                <div className="card-body p-4 h-100">
                  <img src={Profesional} alt="..." style={{ width: "32px" }} />
                  <h5 className="title card-title my-3">Sopir Profesional</h5>
                  <p className="card-text">
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="halaman-5" className="halaman-5">
        <div
          className="container text-center"
          style={{
            backgroundColor: "#0D28A6",
            color: "#FFFF",
            borderRadius: "13px",
            padding: "65px",
          }}
        >
          <h1 className="judul" style={{ color: "#FFFF" }}>
            Sewa Mobil di (Lokasimu) Sekarang
          </h1>
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
            <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="btn btn-nav mt-3 fw-bold">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>

      <div id="halaman-6" className="halaman-6">
        <div className="container" style={{ marginBottom: "11%" }}>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="heading">Frequently Asked Question</h1>
              <p style={{ paddingLeft: "1px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-lg-6">
              <Space direction="vertical">
                <Collapse expandIconPosition="right">
                  <Panel header="Apa saja syarat yang dibutuhkan?" key="1">
                    <p></p>
                  </Panel>
                </Collapse>

                <br />
                <Collapse expandIconPosition="right">
                  <Panel
                    header="Berapa hari minimal sewa mobil lepas kunci?"
                    key="2"
                  >
                    <p></p>
                  </Panel>
                </Collapse>

                <br />
                <Collapse expandIconPosition="right">
                  <Panel
                    header="Berapa hari sebelumnya sebaiknya booking sewa mobil?"
                    key="3"
                  >
                    <p></p>
                  </Panel>
                </Collapse>

                <br />
                <Collapse expandIconPosition="right">
                  <Panel header="Apakah Ada biaya antar-jemput?" key="4">
                    <p></p>
                  </Panel>
                </Collapse>

                <br />
                <Collapse expandIconPosition="right" backgroundColor="#FFFF">
                  <Panel header="Bagaimana jika terjadi kecelakaan" key="5">
                    <p></p>
                  </Panel>
                </Collapse>
              </Space>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
