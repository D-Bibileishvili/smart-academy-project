import styles from "./page.module.css";

const page = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <div className={styles.itemWrapper}>
      <h1 className={styles.title}>{product.title}</h1>;
      <p className={styles.description}>{product.description}</p>
      <div className={styles.priceSection}>
        <span className={styles.price}>${product.price.toFixed(2)}</span>
      </div>
      </div>
      
    </div>
  );
};

export default page;
