"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";
import { FaHome, FaChartBar, FaUsers, FaUser, FaCog } from "react-icons/fa";
import Link from "next/link";

const DATA = [
  { id: 1, title: "products",  link: "products" },
  { id: 2, title: "cart", link: "cart" },
  { id: 3, title: "profile", link: "profile" },
];

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("products");

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
