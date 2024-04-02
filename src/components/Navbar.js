import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import { Avatar } from "primereact/avatar";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sidebar);
  const loginUser = useSelector((state) => state.loginuser.username);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#">
            <FaIcons.FaBars
              style={{ marginLeft: "20" }}
              onClick={showSideBar}
            />
          </Link>
          {/*
          <div className="navbar-title">
          <h3>e-Depo</h3>
          <h3>e-Depo</h3>
          <h3>e-Depo</h3>
  </div>*/}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className="navbar-toogle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideBarData.map((items, index) => {
              return (
                <li key={index} className={items.cName}>
                  <Link to={items.path}>
                    {items.icon}
                    <span>{items.title}</span>
                  </Link>
                </li>
              );
            })}
            <div>
              <Avatar
                style={{
                  marginLeft: 55,
                  marginTop: 350,
                }}
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                className="mr-2"
                size="large"
                shape="circle"
              >
                <h6 style={
                  { marginLeft: 10 ,
                  color:'#fff'}
                  }>
                  {loginUser}</h6>
              </Avatar>
            </div>

            <li className="nav-logout">
              <Link to={"/"}>
                <FaIcons.FaSignOutAlt />
                <span>Çıkış</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

const SideBarData = [
  {
    title: "Anasayfa",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Raporlar",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Taleplerim",
    path: "/basket",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Organizasyon",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Mesajlar",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Destek",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
