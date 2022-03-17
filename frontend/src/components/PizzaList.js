import React from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import {useHistory}  from 'react-router-dom'
const PizzaList = ({productList}) => {
  const history =useHistory()
  const {loading, products} = productList

  const handleProduct =(id) => {
  history.push(`/product/${id}`)
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.wrapper}>
      {loading && <div style ={{fontSize:'30px',marginTop:'10px'}}>Loading 🍕🍕🍕</div>}
        {products?.map((product,i) => {

          return (

           <PizzaCard 
           handleProduct={()=>handleProduct(product._id)}
          key ={i}
           product={product}/>)
        }
        )}
          
      </div>
    </div>
  );
};

export default PizzaList;
