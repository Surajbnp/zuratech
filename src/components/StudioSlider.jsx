import React from "react";
import styles from "../styles/slider.module.css";
import { Box } from "@chakra-ui/react";

const logos = [
  "https://ct.mob0.com/Previews/732438332.png",
  "https://ct.mob0.com/Previews/732438332.png",
  "https://ct.mob0.com/Previews/732438332.png",
  "https://ct.mob0.com/Previews/732438332.png",
  "https://ct.mob0.com/Previews/732438332.png",
  "https://ct.mob0.com/Previews/732438332.png",
  "https://ct.mob0.com/Previews/732438332.png",
];

export default function StudioSlider() {
  // Duplicate the array to create a seamless loop
  const repeatedLogos = [...logos, ...logos];

  return (
    <Box overflow={"hidden"} className={styles.slider}>
      <div className={styles.slideTrack}>
        {repeatedLogos.map((logo, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              height="100"
              width="250"
            />
          </div>
        ))}
      </div>
    </Box>
  );
}
