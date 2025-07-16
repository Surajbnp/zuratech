import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaFacebookF, FaVimeoV, FaInstagram, FaBars } from "react-icons/fa";

const StudioNav = () => {
  const bgColorScrolled = useColorModeValue(
    "rgba(0, 0, 0, 0.7)",
    "rgba(0, 0, 0, 0.9)"
  );
  const bgColorInitial = "transparent"; // Initial transparent background
  const textColor = "white";
  const transition = "height 0.5s ease-out, background-color 0.3s ease"; // Added background-color transition

  const [isLinksVisible, setIsLinksVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll state

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled past a certain point (e.g., 50px)
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setIsLinksVisible(!isLinksVisible);
  };

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      height={isLinksVisible ? "100vh" : "10vh"}
      bg={
        isLinksVisible
          ? bgColorScrolled
          : isScrolled
          ? bgColorScrolled
          : bgColorInitial
      }
      zIndex={1000}
      display="flex"
      flexDirection="column"
      justifyContent={isLinksVisible ? "space-between" : "center"}
      alignItems="center"
      padding="20px"
      transition={transition}
    >
      {/* Logo Section */}
      <Box textAlign="center" mb={isLinksVisible ? "40px" : "0"}>
        {/* <Text
          fontSize={{ base: "xl", md: "4xl" }}
          fontWeight="bold"
          color={textColor}
        >
          ZURA STUDIO
        </Text> */}
        <Image
          src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1746783269/STUDIO_2_h8qs5u.png"
          w={{ base: "200px", md: "300px" }}
          h={"fit-content"}
        />
      </Box>

      {/* Color Toggle Icon */}
      {/* <IconButton /> */}

      {/* Hamburger Icon */}
      <IconButton
        aria-label="Toggle Menu"
        icon={<FaBars />}
        size="lg"
        variant="ghost"
        color={textColor}
        onClick={handleToggle}
        _hover={{ color: "gray.300" }}
        position="absolute"
        top="20px"
        right="20px"
        zIndex={1001}
      />

      {/* Menu Items */}
      <Stack
        spacing="30px"
        textAlign="center"
        fontSize="lg"
        color={textColor}
        opacity={isLinksVisible ? 1 : 0}
        transform={isLinksVisible ? "translateY(0)" : "translateY(-20px)"}
        transition={transition}
        pointerEvents={isLinksVisible ? "auto" : "none"}
        display={isLinksVisible ? "flex" : "none"}
      >
        <Text>ARCHITECTURAL MODELS</Text>
        <Text>ARCHITECTURAL FILMS</Text>
        <Text>GALLERY</Text>
        <Text>ABOUT US</Text>
        <Text>CAREER</Text>
        <Text>CONTACT US</Text>
      </Stack>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing="20px"
        opacity={isLinksVisible ? 1 : 0}
        transform={isLinksVisible ? "translateY(0)" : "translateY(-20px)"}
        transition={transition}
        pointerEvents={isLinksVisible ? "auto" : "none"}
        display={isLinksVisible ? "flex" : "none"}
      >
        <IconButton
          aria-label="Facebook"
          icon={<FaFacebookF />}
          size="lg"
          variant="ghost"
          color={textColor}
          _hover={{ color: "gray.300" }}
        />
        <IconButton
          aria-label="Vimeo"
          icon={<FaVimeoV />}
          size="lg"
          variant="ghost"
          color={textColor}
          _hover={{ color: "gray.300" }}
        />
        <IconButton
          aria-label="Instagram"
          icon={<FaInstagram />}
          size="lg"
          variant="ghost"
          color={textColor}
          _hover={{ color: "gray.300" }}
        />
      </Stack>
    </Box>
  );
};

export default StudioNav;
// waitig for the data to incoming from the database
