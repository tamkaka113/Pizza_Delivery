import React from 'react'
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img className={styles.img} src="/image/bg.jpeg"  layout="fill" alt="" style={{objectFit:"cover"}} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE GREAT PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            169 Main Road #304.
            <br /> Sydney,
            <br /> (03) 6334 2323
          </p>
          <p className={styles.text}>
          169 Brisbane st Rd #235.
            <br /> NewYork, 85022
            <br /> (03) 6334 2323
          </p>
        
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY TO FRIDAY
            <br /> 9:00 – 21:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer