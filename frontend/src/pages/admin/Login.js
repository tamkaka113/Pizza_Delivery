
import { useState } from "react";
import styles from "../../styles/Login.module.css";
import {adminLogin} from '../../actions/adminActions'
import {useDispatch,useSelector} from'react-redux'
const Login = () => {

  const dispatch =useDispatch()
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
const adminLogin =useSelector(state => state?.adminLogin)

console.log(adminLogin)
  
  const handleClick = () => {

  dispatch(adminLogin({username,password})) 
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} className={styles.button}>
          Sign In
        </button>
        {!adminLogin.token&& <span className={styles.error}>Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default Login;
