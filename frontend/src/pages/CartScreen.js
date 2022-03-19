import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../actions/cartActions";
import {createNewOrder} from '../actions/orderActions'
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import OrderDetail from "../components/OrderDetail";
import {resetCart} from '../actions/cartActions'
const CartScreen = ({history}) => {
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const orderList =useSelector(state=> state.orders)
  const {success, orders} =orderList
  useEffect(()=> {
    if(success) {
      history.push(`/order/${orders._id}`)
      dispatch(resetCart())
      window.location.reload()
    }
  },[success,orders._id,dispatch,history])

  const totalPrice = cartItems.reduce((total, item) => {
    total += item.price * item.qnt;

    return total;
  }, 0);
  const amount = totalPrice;
  const currency = "USD";
  const style = { layout: "vertical" };

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };
 const createOrder =  (order) =>  {
  
  dispatch(createNewOrder(order))
}   
  const ButtonWrapper = ({ currency, showSpinner }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
                createOrder({
                  customer: shipping.name.full_name,
                  address: shipping.address.address_line_1,
                  total: totalPrice,
                  method: 1,
                })
              
            });
          }}
        />
      </>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
          {cartItems.map((item) => {
            return (
              <tr key={item._id} className={styles.tr}>
                <td>
                  <img className={styles.img} src={item.img} alt="" />
                </td>
                <td>
                  <span className={styles.name}>{item.title}</span>
                </td>

                <td>
                  {item.extras.map((option) => {
                    return (
                      <span key={option._id} className={styles.extras}>
                        {option.text},{" "}
                      </span>
                    );
                  })}
                </td>
                <td>
                  <span className={styles.price}>{item.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{item.qnt}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    {(item.price * item.qnt).toFixed(2)}
                  </span>
                </td>
                <td>
                  <span
                    onClick={() => handleRemove(item._id)}
                    className={styles.remove}
                  >
                    X
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            {totalPrice.toFixed(2)}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>
            {totalPrice.toFixed(2)}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => setCash(true)}
              >
                CASH ON DELIVERY
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "Ae_mJUqVkLJ8loJmOXgb3Hok26E-lr75ySorE_WEDNZxg9T8TThOENSMdzs109TjVADTNOG0TCiID9lE",
                  components: "buttons",
                  currency: "AUD",
                  "disable-funding": "credit,card,p24",
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetail total={totalPrice.toFixed(2)} createNewOrder={createNewOrder} dispatch ={dispatch}/>}
    </div>
  );
};

export default CartScreen;
