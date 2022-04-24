import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import PizzaList from "../components/PizzaList";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import AddButton from "../components/AddButton";
import Add from "../components/Add";
const HomeScreen = () => {
  const [close, setClose] = useState(false);
  const productList = useSelector((state) => state.productList);
  const { adminInfo } = useSelector((state) => state?.adminLogin);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <Carousel />
      {adminInfo.username && <AddButton setClose={setClose} />}
      {close && <Add setClose={setClose} />}
      <PizzaList productList={productList} />
    </div>
  );
};

export default HomeScreen;
