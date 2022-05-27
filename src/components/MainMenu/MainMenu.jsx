import rectangleIcon from "../../image/Rectangle_Icon.svg";
import homeIcon from "../../image/Home_Icon.svg";
import truckIcon from "../../image/Truck_Icon.svg";
import { NavLink } from "react-router-dom";
import "./MainMenu.css";

function MainMenu() {
  return (
    <div className="main-menu">
      <NavLink to="/">
        <div className="box text-center d-flex justify-content-center align-items-center">
          <img className="side-icon" src={rectangleIcon} alt="" />
        </div>
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "box box-active text-center py-2"
            : "box box-inactive text-center py-2"
        }
      >
        <div
          className={({ isActive }) =>
            isActive
              ? "box box-active text-center py-2"
              : "box box-inactive text-center py-2"
          }
        >
          <img className="side-icon" src={homeIcon} alt="" />
        </div>
      </NavLink>

      <NavLink to="/">
        <div className="box text-center py-2">
          <img className="side-icon" src={truckIcon} alt="" />
        </div>
      </NavLink>

      <NavLink to="/random">
        <div className={({ isActive }) => (isActive ? "true" : "false")}>
          <img className="side-icon" src={truckIcon} alt="" />
        </div>
      </NavLink>
    </div>
  );
}

export default MainMenu;
