import { useEffect, useState } from "react";
import styles from "../styles/EditProduct.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {getSingleProduct,updateProduct } from "../actions/productActions";
import { useHistory, useParams } from "react-router-dom";
const Add = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  const { product } = useSelector((state) => state.product);
  useEffect(() => {
    if (!product.title) {
      dispatch(getSingleProduct(id));
    } else {
      setDesc(product.desc);
      setTitle(product.title);
      setPrices(product.prices);
      setExtraOptions(product.extraOptions);
      setImage(product.img)
    }
  }, [product.title, id]);
  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {
      const {
        data: { image }
      } = await axios.post(`/api/v1/products/uploads`, formData);

      setImage(image);
    } catch (error) {
      console.error(error);
    }
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = Number(e.target.value);
    setPrices(currentPrices);
  };

  const handleExtraInput = (e) => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = (e) => {
    setExtraOptions((prev) => [...prev, extra]);
  };

  const handleEdit = () => {
    dispatch(
      updateProduct(id,{
        title,
        img: image,
        desc,
        prices,
        extraOptions,
      })
    );
  };

  const handleRemove = (id) => {
    const newOptions = extraOptions.filter((option) => option._id !== id);

    setExtraOptions(newOptions);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.wrapper}>
          <h1>Edit Pizza</h1>
          <div className={styles.item}>
            <label className={styles.label}>Choose an image</label>
            <input type="file" onChange={(e) => uploadImageHandler(e)} />
            
          
          </div>
          <div className={styles.item}>
            
            <img src={image} alt='' styles={{width:'40px', height:'40px'}}/>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Title</label>
            <input
              className={styles.input}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Desc</label>
            <textarea
              rows={4}
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Prices</label>
            <div className={styles.priceContainer}>
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Small"
                value={prices[0]}
                onChange={(e) => changePrice(e, 0)}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Medium"
                value={prices[1]}
                onChange={(e) => changePrice(e, 1)}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Large"
                value={prices[2]}
                onChange={(e) => changePrice(e, 2)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Extra</label>
            <div className={styles.extra}>
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="text"
                placeholder="Item"
                name="text"
                onChange={handleExtraInput}
              />
              <input
                className={`${styles.input} ${styles.inputSm}`}
                type="number"
                placeholder="Price"
                name="price"
                onChange={handleExtraInput}
              />
              <button className={styles.extraButton} onClick={handleExtra}>
                Add
              </button>
            </div>
            <div className={styles.extraItems}>
              {extraOptions.map((option) => {
                return (
                  <div className={styles.itemWrapper}>
                    <span key={option.text} className={styles.extraItem}>
                      {option.text}
                      <span
                        onClick={() => handleRemove(option._id)}
                        className={styles.closed}
                      >
                        {" "}
                        x
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <button className={styles.addButton} onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
