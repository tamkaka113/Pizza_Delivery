import React from "react";
import styles from "../styles/PizzaCard.module.css";
const PizzaCard = ({ product, handleProduct }) => {
  return (
    <div className={styles.container} onClick={handleProduct}>
      <img
        src={product?.img}
        alt=""
        style={{ width: "200px", height: "200px" }}
      />
      <h1 className={styles.title}>{product?.title}</h1>
      <span className={styles.price}>${product.prices[0]}</span>
      <p className={styles.desc}>{product?.desc}</p>
    </div>
  );
};

export default PizzaCard;
