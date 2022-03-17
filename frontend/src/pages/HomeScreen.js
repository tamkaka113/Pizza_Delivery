import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import PizzaList from '../components/PizzaList'
import {listProducts} from '../actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
const HomeScreen = () => {
  const productList =useSelector(state => state.productList)


  const dispatch =useDispatch()
  useEffect(()=> {
  
 dispatch(listProducts())
  },[dispatch])
  return (
    <div>
      <Carousel/>
      <PizzaList productList ={productList}/>
    
    </div>
  )
}

export default HomeScreen