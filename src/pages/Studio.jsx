import React from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import styles from "../styles/studio.module.css";
import { motion } from "framer-motion";
import MyGallery from "../components/Gallery";

const Studio = () => {
  const services = [
    {
      name: "Architectural Models",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      name: "Architectural Films",
      img: "https://images.unsplash.com/photo-1718813832843-a033eea57827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFyY2hpdGVjdHVyYWwlMjBGaWxtc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "AR / VR",
      img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXIlMjB2cnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Brochures",
      img: "https://images.unsplash.com/photo-1591351659190-6258bbec984d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Audio Visual",
      img: "https://plus.unsplash.com/premium_photo-1664699106229-1bc773380c35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QXVkaW8lMjB2aXN1YWx8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Drone Shoots",
      img: "https://images.unsplash.com/photo-1656778764981-91824db9b244?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERyb25lJTIwc2hvdHN8ZW58MHx8MHx8fDA%3D",
    },
  ];

  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <Box minH={"100vh"}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <Box
          p={0}
          m={0}
          w="100vw"
          h="100vh"
          pos="relative"
          overflow="hidden"
          bg="black"
        >
          <Box
            as="iframe"
            src="https://player.vimeo.com/video/798638557?autoplay=1&loop=1&background=1&title=0&muted=1&controls=0&autopause=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            w="1920px"
            h="1080px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            border="none"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <Flex align={"center"} justify={"center"} h={"25vh"} p={"30px"}>
          <Text fontSize={{ base: "28px", md: "32px" }}>SERVICES</Text>
        </Flex>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <Grid
          width={"fit-content"}
          alignContent={"center"}
          gap={"80px"}
          m={"auto"}
          justifyItems={"center"}
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
        >
          {services?.length &&
            services?.map((e, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
              >
                <Box
                  color={"white"}
                  bgImage={e?.img}
                  bgRepeat={"no-repeat"}
                  bgSize={"cover"}
                  bgPos={"center"}
                  className={styles.card}
                >
                  {e?.name}
                </Box>
              </motion.div>
            ))}
        </Grid>
      </motion.div>

      <Box mt={16} border="1px solid red">
        <MyGallery />
      </Box>

      <Flex
        mt={"80px"}
        bg={"#121212"}
        align={"center"}
        justify={"center"}
        h={"5vh"}
      >
        <Text>{"©2025 ZURA TECH ALL RIGHTS RESERVED"}</Text>
      </Flex>
    </Box>
  );
};

export default Studio;
