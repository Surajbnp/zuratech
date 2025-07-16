import {
  Box,
  Flex,
  HStack,
  Text,
  IconButton,
  Button,
  Image,
  Switch,
  useDisclosure,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Links = ["Home", "Case-Studies", "About", "Experts", "Contact"];

const NavLink = ({ children, onClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const linkPath = children === "Home" ? "/" : `/${children.toLowerCase()}`;

  const isActive = currentPath === linkPath;

  return (
    <Text
      as="a"
      px={3}
      py={2}
      rounded="md"
      fontWeight={isActive ? 600 : 400}
      cursor="pointer"
      color={isActive ? "#4A6CF7" : "inherit"}
      _hover={{
        textDecoration: "none",
        borderRadius: "none",
        color: "#4A6CF7",
        fontWeight: 600,
      }}
      onClick={onClick}
    >
      {children}
    </Text>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const [studio, setIsStudio] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setShowOverlay(true);
    let timer = 3;
    setCountdown(timer);

    const interval = setInterval(() => {
      timer -= 1;
      setCountdown(timer);

      if (timer === 0) {
        clearInterval(interval);
        setShowOverlay(false);
        setIsStudio(true);
        window.open("/studio", "_blank");
      }
    }, 1000);
  };

  // Define background colors based on scroll and color mode
  const bgColor = isScrolled
    ? colorMode === "light"
      ? "gray.100"
      : "gray.900"
    : "transparent";

  const location = useLocation();
  const isHomepage = location.pathname === "/";
  const isLight = colorMode === "light";

  // textColor logic
  const textColor = isHomepage
    ? isScrolled
      ? isLight
        ? "black"
        : "white"
      : "white"
    : isLight
    ? "black"
    : "white";

  return (
    <Box
      bg={bgColor}
      color={textColor}
      w="100%"
      px={4}
      h="9vh"
      position="fixed"
      top="0"
      zIndex="1000"
      transition="background-color 0.3s ease"
    >
      <Flex
        maxW="1300px"
        mx="auto"
        h="full"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <HStack spacing={6} alignItems="center">
          <Box onClick={() => navigate("/")}>
            <Image
              w="70%"
              src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1741593004/Zura-Tech-Logo-169_1_ogc6la.png"
              cursor="pointer"
            />
          </Box>

          {/* Desktop Nav Links */}
          <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <NavLink
                key={link}
                onClick={() =>
                  navigate(link === "Home" ? `/` : `/${link.toLowerCase()}`)
                }
              >
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        {/* Right Side - Toggle & Theme Switch */}
        <Flex gap={2} alignItems="center">
          {/* <Flex gap={3} align="center">
            <Text
              w={"fit-content"}
              fontWeight="medium"
              fontSize={{ base: "8px", md: "16px" }}
            >
              {studio ? "Zura Tech" : "Zura Studio"}
            </Text>
            <Switch onChange={handleToggle} size="lg" />
          </Flex> */}
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "block", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Box
            bg={colorMode === "dark" ? "#1e232e" : "white"}
            color={colorMode === "dark" ? "white" : "#1e232e"}
            pb={4}
            display={{ md: "none" }}
            boxShadow="lg"
            width={"100%"}
          >
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink
                  key={link}
                  onClick={() => {
                    navigate(link === "Home" ? `/` : `/${link.toLowerCase()}`);
                    onClose();
                  }}
                >
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        </motion.div>
      )}

      {/* Full-screen GIF Overlay */}
      {/* {showOverlay && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="100vw"
          h="100vh"
          bg="black"
          zIndex="9999"
        >
          <Image
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1743402731/tunnel-4084_n35crm.gif"
            w="100%"
            h="100%"
            objectFit="cover"
          />
          <Text
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            color="white"
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            bg="rgba(0, 0, 0, 0.7)"
            p={4}
            borderRadius="md"
          >
            Moving to Zura Studio in {countdown}...
          </Text>
        </Box>
      )} */}
    </Box>
  );
}

// adding 2 navbar one for homepage another for pages rest
