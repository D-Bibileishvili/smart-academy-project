"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart, decreaseQuantity } from "@/lib/slices/cartSlice";

const page = () => {
  const cartProducts = useAppSelector((store) => store.cart.items);
  const dispatch = useAppDispatch();

  const handleAddMore = (item) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div>
      {cartProducts.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <button onClick={() => handleAddMore(item)}>plus 1</button>
          <p>{item.quantity}</p>
          <button onClick={() => handleDecrease(item)}>minus 1</button>
        </div>
      ))}
    </div>
  );
};

export default page;
