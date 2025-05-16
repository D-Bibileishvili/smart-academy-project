"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const fetchCartProduts = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = await response.json();
  return result;
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      const res = await fetch("https://fakestoreapi.com/carts/2");
      const cart = await res.json();

      const productDetails = await Promise.all(
        cart.products.map(async (product) => {
          const fullProduct = await fetchCartProduts(product.productId);
          return {
            ...fullProduct,
            quantity: product.quantity,
          };
        })
      );

      setCartItems(productDetails);
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.min(10, Math.max(1, item.quantity + delta)),
            }
          : item
      )
    );
  };

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.heading}>Shopping Cart</h1>

      <div className={styles.cartContent}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>QUANTITY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className={styles.productInfo}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                  <div>
                    <p>{item.title}</p>
                    <p className={styles.subText}>Category: {item.category}</p>
                  </div>
                </td>
                <td className={styles.quantityControls}>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className={styles.qtyBtn}
                  >
                    −
                  </button>
                  <span className={styles.qty}>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className={styles.qtyBtn}
                  >
                    +
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.summaryBox}>
          <h2>Order Summary</h2>
          <p>
            Shipping: <span className={styles.green}>Free</span>
          </p>
          <p>
            Subtotal: <strong>${subtotal.toFixed(2)}</strong>
          </p>

          <input
            type="text"
            placeholder="Coupon Code"
            className={styles.couponInput}
          />
          <button className={styles.applyBtn}>Apply</button>

          <div className={styles.total}>
            <p>
              Total: <strong>${subtotal.toFixed(2)}</strong>
            </p>
          </div>

          <button className={styles.buyBtn}>BUY</button>
        </div>
      </div>
    </div>
  );
}
