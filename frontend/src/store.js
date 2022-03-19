import {createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer,getProductReducer,createProductReducer,updateProductReducer,deleteProductReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
import {orderReducers,userOrderReducers,getAllOrderReducers,updateStatusReducers} from './reducers/orderReducers'
import { adminLoginReducers } from './reducers/adminReducers';
const middleware =[thunk]
const reducer = combineReducers({
productList:productListReducer,
product:getProductReducer,
cart:cartReducers,
orders:orderReducers,
userOrder:userOrderReducers,
adminLogin:adminLoginReducers,
adminOrders:getAllOrderReducers,
updateStatus:updateStatusReducers,
createProduct:createProductReducer,
deleteProduct:deleteProductReducer,
updateProduct:updateProductReducer,
})

const cartFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const adminFromStorage =localStorage.getItem("adminInfo")  ? JSON.parse(localStorage.getItem("adminInfo"))
: {};
  
const initialState = {
 cart:{
     cartItems:cartFromStorage
 },
 
 adminLogin: {
   adminInfo:adminFromStorage
 }

}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store