"use client";

import styles from "./AddToCartButton.module.css";

import { useAppDispatch } from "@/lib/hooks";
import { addToCart } from "@/lib/slices/cartSlice";

const AddToCartButton = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  };
  return <button className={styles.addToCardBtn} onClick={handleAddToCart}>add to cart </button>;
};

export default AddToCartButton;