import {createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer,getProductReducer } from './reducers/productReducers';
const middleware =[thunk]
const reducer = combineReducers({
productList:productListReducer,
product:getProductReducer    
})
const initialState = {

}
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store