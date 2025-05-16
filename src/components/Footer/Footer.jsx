import styles from "./Footer.module.css"
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.footerWrap}>
      <div className={styles.footLeftSide}>
        <p>Condition of USE</p>
        <p>Privace Notice</p>
        <p>Insert-Based Ads</p>
      </div>
      <div className={styles.footRightSide}><FaRegCopyright /> 1996-2021,Amazon.com.Inc. or its affilaes</div>
    </div>
  );
};

export default Footer;
