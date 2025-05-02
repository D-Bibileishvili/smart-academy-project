"use client";
import { useRouter } from "next/navigation";
import styles from "./NavBar.module.css";


const NavBarItem = ({ item, activeTab, setActiveTab }) => {
  const router = useRouter()
  const handleClick = () => {
    setActiveTab(item.title);
    router.push(`${item.title.toLocaleLowerCase()}`);
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
