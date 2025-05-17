"use client";
import { useState } from "react";
import styles from "./NavBar.module.css";
import NavBarItem from "./NavBarItem";
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaUser,
  FaCog,
  FaTh,
  FaSearch,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsGlobe2 } from "react-icons/bs";

const DATA = [
  { id: 1, title: "products", link: "/products" },
  { id: 2, title: "cart", link: "/cart" },
  { id: 3, title: "profile", link: "/profile" },
];

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x281.png"
            alt="Amazon Logo"
          />
        </Link>
        <FaTh className={styles.icon} />
        <Link href="/products">
          <strong>ALL Products</strong>{" "}
        </Link>
        <Link href="/products">Today's Deals</Link>
        <Link href="#">Gift Cards</Link>
        <Link href="#">Registry & Gifting</Link>
      </div>

      <div className={styles.right}>
        <HiOutlineLocationMarker />
        <span>Georgia</span>

        <BsGlobe2 />
        <span>ENG</span>

        <span>USD</span>
        <Link className={styles.custumer} href="#">
          Customer Service
        </Link>

        <FaSearch />
        <span>Search</span>

        <Link href="/profile">
          <FaUser />
        </Link>
        <FaHeart />
        <Link className={styles.cart} href="/cart">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
