import styles from "./page.module.css";
import Image from "next/image";

const fetchCartProduts = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    return result;
  };
  
  const page = async () => {
    const response = await fetch(`https://fakestoreapi.com/carts/2`);
    const cart = await response.json();
    const data = [];
  
    for (let product of cart.products) {
      const prodData = await fetchCartProduts(product.productId);
      data.push({
        ...prodData,
        quantity: product.quantity,
      });
    }
  
    const subtotal = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  
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
              {data.map((item) => (
                <tr key={item.id}>
                  <td className={styles.productInfo}>
                    <Image src={item.image} alt={item.title} width={60} height={60} />
                    <div>
                      <p>{item.title}</p>
                      <p className={styles.subText}>Category: {item.category}</p>
                    </div>
                  </td>
                  <td className={styles.quantityControls}>
                    <button className={styles.qtyBtn}>−</button>
                    <span className={styles.qty}>{item.quantity}</span>
                    <button className={styles.qtyBtn}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className={styles.summaryBox}>
            <h2>Order Summary</h2>
            <p>Shipping: <span className={styles.green}>Free</span></p>
            <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
  
            <input type="text" placeholder="Coupon Code" className={styles.couponInput} />
            <button className={styles.applyBtn}>Apply</button>
  
            <div className={styles.total}>
              <p>Total: <strong>${subtotal.toFixed(2)}</strong></p>
            </div>
  
            <button className={styles.buyBtn}>BUY</button>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default page;