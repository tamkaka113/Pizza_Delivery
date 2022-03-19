import React, { useState,useRef,useEffect } from "react";
import styles from "../styles/Product.module.css";
import {addToCart} from '../actions/cartActions'
import { useDispatch } from "react-redux";
const ProductDetail = ({ loading, pizza,toastify }) => {
    const dispatch =useDispatch()
    const pizzaRef =useRef()
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(0);
  const [extras, setExtras] =useState([])
  const [quantity, setQuantity] =useState(1)

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras(prev => [...prev,option])
    } else {
      changePrice(-option.price);
      setExtras(extras.filter(extra => extra._id !== option._id))
    }
  };

  useEffect(() => {
  
    pizzaRef.current?.scrollIntoView({ behavior: "smooth" });
   
  }, [])
  
  const handleCart =() => {

      dispatch(addToCart({
      _id:pizza._id,
      img:pizza.img,
      price:pizza?.prices && pizza?.prices[size] +price,
      title:pizza.title,
      desc:pizza.desc,
      extras:extras,
      qnt:quantity

      }))

      toastify()
  }
  return (
    <div >
      <div ref={pizzaRef}></div>
      {loading && (
        <div style={{ fontSize: "20px", marginTop: "10px" }}>
          Loading 🍕🍕🍕
        </div>
      )}
      <div  className={styles.container}>
        <div className={styles.left}>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={pizza?.img} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{pizza?.name}</h1>
          <span  className={styles.price}>
          ${pizza?.prices && pizza?.prices[size] +price}
          </span>
          <p className={styles.desc}>{pizza?.desc}</p>
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
              <img className={styles.sizeImage} src="/image/size.png" alt="" />
              <span className={styles.number}>Large</span>
            </div>
          </div>
          <h3 className={styles.choose}>Choose additional ingredients</h3>
          <div className={styles.ingredients}>
            {pizza?.extraOptions?.map((option) => {
              return (
                <div className={styles.option}>
                  <input
                    type="checkbox"
                    id={option.text}
                    name={option.text}
                    className={styles.checkbox}
                    onChange={(e) => {
                      handleChange(e, option);
                    }}
                  />
                  <label htmlFor={option.text}>{option.text}</label>
                </div>
              );
            })}
          </div>

          <div className={styles.add}>
            <input onChange={(e)=> {setQuantity(e.target.value)}} type="number" defaultValue={quantity} className={styles.quantity} />
            <button 
            onClick ={()=> handleCart()}
            className={styles.button}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
