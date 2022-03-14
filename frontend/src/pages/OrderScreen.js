import React from "react";
import styles from "../styles/Order.module.css";
const OrderScreen = () => {
    const status = 0;

    const statusClass = (index) => {
      if (index - status < 1) return styles.done;
      if (index - status === 1) return styles.inProgress;
      if (index - status > 1) return styles.undone;
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>129837819237</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className={styles.total}>$79.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <img src="/image/paid.png"  alt="" />
            <span>Payment</span>
          
              <img
                className={styles.checkedIcon}
                src="/image/checked.png"
               
                alt=""
              />
    
          </div>
          <div className={statusClass(1)}>
            <img  className={styles.img} src="/image/bake.png"  alt="" />
            <span>Preparing</span>
              <img
                className={styles.checkedIcon}
                src="/image/checked.png"
               
                alt=""
              />
        
          </div>
          <div className={statusClass(2)}>
            <img src="/image/bike.png"  alt="" />
            <span>On the way</span>
         
              <img
                className={styles.checkedIcon}
                src="/image/checked.png"
               
                alt=""
              />
        
          </div>
          <div className={statusClass(3)}>
            <img src="/image/delivered.png"  alt="" />
            <span>Delivered</span>
          
              <img
                className={styles.checkedIcon}
                src="/image/checked.png"
               
                alt=""
              />
    
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderScreen;
