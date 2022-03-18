import React, { useEffect } from "react";

import { getSingleProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "../components/ProductDetail";
const ProductScreen = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state?.product);
  const { loading, product } = productDetail;
 
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id,dispatch]);


  return (
   <ProductDetail 
    loading ={loading}
    pizza= {product}
   />
  );

};

export default ProductScreen;
