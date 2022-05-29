import React from "react";
import "./NavbarHome.css";
import { useNavigate, Link } from "react-router-dom";

function NavbarHome() {
  const navigate = useNavigate();

  const navLogin = (e) => {
    navigate("/login");
    e.preventDefault();
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{ backgroundColor: "#F1F3FF" }}
        Id="navbarHome"
      >
        <div className="container">
          <button
            type="button"
            className="btn btn-nav me-0 ms-0"
            style={{ backgroundColor: "#0D28A6" }}
          >
            <span style={{ visibility: "hidden" }}>Register</span>
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="link nav-link me-4"
                aria-current="#"
                href="#halaman-2"
              >
                <b>Our Services</b>
              </a>
              <a className="link nav-link me-4" href="#halaman-3">
                <b>Why Us</b>
              </a>
              <a className="link nav-link me-4" href="#halaman-4">
                <b>Testimonial</b>
              </a>
              <a className="link nav-link me-4" href="#halaman-6">
                <b>FAQ</b>
              </a>
              {/* <a href="/login"> */}
              <Link to={`/login`}>
                <button type="button" className="btn btn-nav me-0">
                  <strong>Register</strong>
                </button>
              </Link>
              {/* </a> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarHome;
