// import { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({show}) => {
	return (
		<>
			<div
				className={`${
					show ? "" : "d-none"
				} sidebar position-fixed`}
			>
				<ul>
					<li>Helo</li>
					<li>Helo</li>
					<li>Helo</li>
					<li>Helo</li>
					<li>Helo</li>
					<li>Helo</li>
					<li>Helo</li>
					<li>Helo</li>
				</ul>
			</div>
		</>
	);
};
export default Sidebar;
