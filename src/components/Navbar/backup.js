import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuList from "../MenuList";
import logo from "../../images/plasmida-logo.png";
import "./navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const menu = MenuList.map((list) => {
    return (
      <li
        key={list.id}
        data-aos="zoom-in-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <NavLink
          exact="true"
          to={list.url}
          activeclassname="active"
          onClick={()=>setToggle(false)}
        >
          {" "}
          {list.title}{" "}
        </NavLink>
      </li>
    );
  });
  return (
    <>
      <nav className="nav-div">
        <div className="logo-container">
          <div
            data-aos="zoom-in-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="logo-div"
          >
            <NavLink to="/">
              <img className="logo" src={logo} alt="plasmida" />{" "}
              <font className="logo-label">PLASMIDA</font>
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleToggle}>
            <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>

        <ul className={!toggle ? "menu-list menu-list-dark" : "menu-list close"}>
          {menu}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
