"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar/NavBar";
import Link from "next/link";
import { useRouter, redirect } from "next/navigation";
import { RedirectType } from "next/navigation";
import { useEffect } from "react";
// import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    console.log(router.replace("/signup/login"));
  });
}

// {/* <section className={styles.itemContainer}>
//         <div className={styles.imageContainer}>
//           <div className={styles.imageWrapper}>
//             <Image
//               src="/images/subaru.jpg"
//               width={240}
//               height={160}
//               className={styles.image}
//               alt="item image"
//             />
//           </div>
//         </div>

//         <div className={styles.description}>
//           <div>
//             <p className={styles.city}>თბილისი</p>
//           </div>
//           <div className={styles.nameWrapper}>
//             <h3>2014 - Subaru WRX</h3>
//             <Image src="/images/heart.png" width={16} height={16} alt="heart" />
//           </div>
//           <p className={styles.price}>33,900 ₾</p>
//           <div className={styles.about}>
//             <p>სედანი</p>
//             <p>ბენზინი</p>
//           </div>
//         </div>
//       </section> */}
