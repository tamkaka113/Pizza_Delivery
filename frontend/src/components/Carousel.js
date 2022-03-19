import React, { useState } from "react";
import styles from "../styles/Carousel.module.css";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/image/featured2.png",
    "/image/featured3.png",
    "/image/featured2.png",
  ];

  const handleDirection = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <img
        src="../image/arrowl.png"
        className={styles.arrowImg}
        style={{ left: "0", zIndex: "20", objectFit: "contain" }}
        alt="arrow"
        onClick={() => {
          handleDirection("left");
        }}
      />
      <div
        className={styles.wrapper}
        style={{ transform: `translate(${-100 * index}%)` }}
      >
        {images.map((img, i) => {
          return (
            <div
              key={i}
              className={styles.imgContainer}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          );
        })}
      </div>
      <img
        src="../image/arrowr.png"
        className={styles.arrowImg}
        style={{ right: "0", objectFit: "contain" }}
        alt="arrow"
        onClick={() => {
          handleDirection("right");
        }}
      />
    </div>
  );
};

export default Carousel;
