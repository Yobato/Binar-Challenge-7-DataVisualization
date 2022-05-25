// import { useState } from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  // props.name
  return (
    <>
      <div
        className="sidebar"
        style={
          props.show
            ? {
                position: "fixed",
                top: "64px",
                left: "70px",
                bottom: 0,
                right: 0,
                width: "13rem",
              }
            : {
                position: "fixed",
                top: "64px",
                bottom: 0,
                right: 0,
                width: "13rem",
                display: "none",
              }
        }
      >
        <ul></ul>
      </div>
    </>
  );
};
export default Sidebar;
