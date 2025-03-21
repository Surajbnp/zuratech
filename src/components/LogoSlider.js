// LogoSlider.js
import React from "react";
import styles from "../styles/slider.module.css";
import { Text } from "@chakra-ui/react";

const LogoSlider = ({ images }) => {
  return (
    <div className={styles.slider}>
      <Text fontSize={"36px"} fontWeight={700} padding={"20px"}>
        Trusted By
      </Text>
      <div className={styles.slideTrack}>
        {images.concat(images).map((img, index) => (
          <div className={styles.slide} key={index}>
            <img src={img} height="100" width="250" alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
