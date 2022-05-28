// import { useState } from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  // props.name
  return (
    <>
      <div className={`${props.show ? "" : "d-none"} sidebar position-fixed`}>
        <p
          style={{
            padding: "25px 5px 0px 25px",
            color: "#8a8a8a",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          {props.name}
        </p>
        <p style={{ backgroundColor: "#ced4ec", padding: "10px 25px" }}>
          {props.name}
        </p>
      </div>
    </>
  );
};
export default Sidebar;
