import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ServiceCard = ({ data }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      textAlign={{ base: "center", md: "start" }}
      w={"100%"}
      p={4}
      border={{ base: "1px solid #4A6CF7", md: "none" }}
    >
      <Box>
        <lord-icon
          colors={`primary:${
            colorMode === "dark" ? "#ffffff" : "#000000"
          },secondary:#4a6cf7`}
          src={data?.icon}
          trigger="loop"
          delay="3000"
          style={{ width: "60px", height: "60px" }}
        ></lord-icon>
      </Box>
      <Text fontSize={{ base: "12px", md: "22px" }} fontWeight={600}>
        {data?.name}
      </Text>
      <Text display={{ base: "none", md: "block" }}>{data?.desc}</Text>
    </Box>
  );
};

export default ServiceCard;
