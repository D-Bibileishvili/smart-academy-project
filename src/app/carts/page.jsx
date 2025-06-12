"use client";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addToCart, decreaseQuantity } from "@/lib/slices/cartSlice";
import styles from "./page.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartPage() {
  const cartItems = useAppSelector((store) => store.cart.items);
  const dispatch = useAppDispatch();

  const handleAdd = (item) => dispatch(addToCart(item));
  const handleDecrease = (item) => dispatch(decreaseQuantity({ id: item.id }));

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.heading}>Shopping Cart</h1>
      <div className={styles.cartContent}>
        <table className={styles.cartTable}>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
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
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => handleDecrease(item)}
                      className={styles.qtyBtn}
                    >
                      −
                    </button>
                    <span className={styles.qty}>{item.quantity}</span>
                    <button
                      onClick={() => handleAdd(item)}
                      className={styles.qtyBtn}
                    >
                      +
                    </button>
                  </div>
                </td>
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
