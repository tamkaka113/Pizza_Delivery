import React, { useEffect } from "react";

import { getSingleProduct } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "../components/ProductDetail";
import { ToastContainer, toast } from 'react-toastify';

const ProductScreen = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state?.product);
  const { loading, product } = productDetail;
   const toastify =() => toast.success("🦄 'Product added successfully'!", {
    autoClose: 2000,
  });
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id,dispatch]);


  return (
    <>
    <ToastContainer/>
   <ProductDetail 
    loading ={loading}
    pizza= {product}
    toastify={toastify}
   />
    </>
  );

};

export default ProductScreen;
