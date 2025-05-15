"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar/NavBar";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    console.log("fetching products..");
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);

    console.log(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <section key={product.id} className={styles.itemContainer}>
          <Image
            src={product.image}
            width={80}
            height={120}
            alt={product.title}
          />
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.priceWrapper}>
            <p>${product.price}</p>
            <button>see details</button>
          </div>
        </section>
      ))}
    </div>
  );
}