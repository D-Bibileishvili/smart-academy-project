"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";
import { FaHome, FaChartBar, FaUsers, FaUser, FaCog } from "react-icons/fa";

const DATA = [
  { id: 1, title: "Home", icon: <FaHome /> },
  { id: 2, title: "Dashboards", icon: <FaChartBar /> },
  { id: 3, title: "Segments", icon: <FaUsers /> },
  { id: 4, title: "Account", icon: <FaUser /> },
  { id: 5, title: "Settings", icon: <FaCog /> },
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className={styles.container}>
      {DATA.map((item) => (
        <NavBarItem
          key={item.id}
          item={item}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </div>
  );
};

export default NavBar;
