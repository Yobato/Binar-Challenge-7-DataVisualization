import React, { useState } from "react";
import MainMenu from "../../components/MainMenu/MainMenu";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Cars() {
  //   const cars = useState("Cars");
  const [displaySidebar, setDisplaySidebar] = useState(true);
  const toggleSidebar = () => {
		return setDisplaySidebar(!displaySidebar);
  };

  return (
		<>
			<MainMenu />
			<Navbar toggleSidebar={toggleSidebar} />
			<Sidebar show={displaySidebar} />
			<div className="wrapper position-relative">
				<div
					className={`${
						displaySidebar
							? "content-sidebar-shown"
							: "content-sidebar-hidden"
					} content-section`}
				>
					<h1>Cars</h1>
				</div>
			</div>
		</>
  );
}

export default Cars;
