import { Image, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styles from "../styles/card.module.css";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const overlayVariants = {
  hidden: { y: "100%" },
  visible: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.2, duration: 0.3 } },
};

const ServiceCard = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {data?.icon ? (
        <lord-icon
          src={data.icon}
          trigger="loop"
          stroke="bold"
          colors="primary:#e5d1fa,secondary:#a39cf4"
          style={{ width: "120px", height: "120px" }}
        ></lord-icon>
      ) : (
        <Image mixBlendMode={"darken"} width={"50%"} src={data?.img} />
      )}
      <Text fontWeight={600}>{data?.name}</Text>

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        variants={overlayVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      >
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <Button
            borderRadius={"20px"}
            fontSize={"12px"}
            bg={"#a39cf4"}
            onClick={() => navigate(`/service/${data.id}`)}
          >
            View Details
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
