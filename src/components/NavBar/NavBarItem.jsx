"use client";
import styles from "./NavBar.module.css";

const NavBarItem = ({ item, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(item.title);
  };

  return (
    <button
      className={
        activeTab === item.title ? styles.itemContainer : styles.navbarItem
      }
      onClick={handleClick}
    >
      <div className={styles.itemWrap}>
        <div>{item.icon}</div>
        <p>{item.title}</p>
      </div>
    </button>
  );
};

export default NavBarItem;
