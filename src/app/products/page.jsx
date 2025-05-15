"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const fetchProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setProducts(result);

    console.log(result);
  }catch (error) {
    console.error(error)
  }
    }
    

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
    {products.map((product) => (
      <Link href={`/products/details/${product.id}`} key={product.id}>
        <div className={styles.card}>
          <img src={product.image} alt={product.title} className={styles.image} />
          <p className={styles.shipping}>Ships to Ukraine</p>
          <h3 className={styles.title}>{product.title}</h3>
          <div className={styles.rating}>
            ★ {product.rating?.rate?.toFixed(1)}
            <span className={styles.reviews}>({product.rating?.count} reviews)</span>
          </div>
          <div className={styles.priceSection}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            
          </div>
        </div>
      </Link>
    ))}
  </div>
    
  );
}

{/* <div className={styles.container}>
      {products.map((product) => (
        <section key={product.id} className={styles.card}>
          <Image
            src={product.image}
            width={80}
            height={120}
            alt={product.title}
            className={styles.image}
          />
          <h3 className={styles.title}>{product.title}</h3>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.price}>
            <p>${product.price}</p>
            <button onClick={() => router.push(`/products/details/${product.id}`)}>see details</button>
          </div>
        </section>
      ))}
    </div> */}