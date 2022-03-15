import React, { useState, useEffect } from "react";
import styles from "../styles/Product.module.css";
import { getSingleProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const ProductScreen = ({ match }) => {
  const id = match.params.id;
  
    const [size, setSize] = useState(0);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
 const {loading,product:productDetail} =product
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={productDetail?.img} alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{productDetail?.name}</h1>
        <span className={styles.price}>{productDetail.prices && productDetail.prices[size]}</span>
        <p className={styles.desc}>{productDetail?.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <img
              className={styles.sizeImage}
              src="/image/size.png"
              layout="fill"
              alt=""
            />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <img
              className={styles.sizeImage}
              src="/image/size.png"
              layout="fill"
              alt=""
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <img
              className={styles.sizeImage}
              src="/image/size.png"
              alt=""
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
