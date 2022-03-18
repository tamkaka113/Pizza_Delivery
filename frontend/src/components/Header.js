import React from 'react'
import styles from '../styles/Header.module.css'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {logout} from '../actions/adminActions'
function Header() {
const history =useHistory()
const dispatch =useDispatch()
 const cart =useSelector(state => state.cart.cartItems)
 const {adminInfo} =useSelector(state => state?.adminLogin)

  const handleLogOut = () => {
dispatch(logout())
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
        <img src='../image/telephone.png' alt='telephone' style={{ width:'35px',height:'35px'}}/>
        </div>
        <div className={styles.texts} >
        <div className={styles.text} >ORDER NOW</div>
        <div className={styles.text} >0431 407 688</div>
        </div>
      </div>
     
      <div className={styles.item}>
        <ul className={styles.list}>
          <li onClick ={()=> history.push('/')} className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <img src="../image/logo.png" alt="" style={{ width:'160px',height:'69px'}} />
         {adminInfo?.username&& <li className={styles.listItem} onClick = {()=> history.push('/admin/dashboard')} >Dashboard</li>}
         {adminInfo?.username&& <li className={styles.listItem} onClick ={()=> {handleLogOut()}}>Logout</li>}
          
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart} onClick={()=> history.push('/cart')}>
          <img src="../image/cart.png" alt="" style={{ width:'30px',height:'30px'}} />
          <div className={styles.counter}>{cart.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Header