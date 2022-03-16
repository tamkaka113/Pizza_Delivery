import {createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer,getProductReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
import {orderReducers} from './reducers/orderReducers'
const middleware =[thunk]
const reducer = combineReducers({
productList:productListReducer,
product:getProductReducer,
cart:cartReducers,
orders:orderReducers
})

const cartFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];


  
const initialState = {
 cart:{
     cartItems:cartFromStorage
 }
}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store