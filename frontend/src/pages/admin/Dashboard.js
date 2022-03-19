import { useEffect, useState } from "react";
import styles from "../../styles/Admin.module.css";
import { useSelector, useDispatch } from "react-redux";
import { listProducts, deleteProduct } from "../../actions/productActions";
import { getAllOrders } from "../../actions/orderActions";
import { updateStatus } from "../../actions/orderActions";

const Dashboard = ({ history }) => {
  const dispatch = useDispatch();


  const status = ["preparing", "on the way", "delivered"];
  const { success: newProductSuccess } = useSelector(
    (state) => state?.createProduct
  );
  const { success: updateStatusSuccess } = useSelector(
    (state) => state?.updateStatus
  );
  const { success: deleteProductSuccess } = useSelector(
    (state) => state?.deleteProduct
  );
  const products = useSelector((state) => state.productList.products);

  const orders = useSelector((state) => state?.adminOrders.orders);

  const { adminInfo } = useSelector((state) => state?.adminLogin);
  
  useEffect(() => {
    if (adminInfo.username || newProductSuccess || deleteProductSuccess || updateStatusSuccess) {
      dispatch(listProducts());
      dispatch(getAllOrders());
    } else {
      history.push("/admin/login");
    }
  }, [
    adminInfo.username,
    dispatch,
   history,
    newProductSuccess,
    deleteProductSuccess,
    updateStatusSuccess
  ]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleStatus = (id, currentStatus) => {
    dispatch(updateStatus(id, currentStatus));
  };

  const handleEdit = (id) => {
    history.push(`/admin/${id}/edit`)
  };
  return (
    <>
    <div className={styles.container}>
  
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {products?.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <img
                    src={product.img}
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>

                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orders?.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button className={styles.processBtn}  onClick={() => handleStatus(order._id, order.status)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
