"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const Links = [
  { name: "Home", id: "sec1" },
  { name: "Services", id: "sec2" },
  { name: "About Us", id: "sec3" },
  { name: "Projects", id: "sec4" },
  { name: "Contact Us", id: "sec5" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeSection, setActiveSection] = useState("sec1");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "sec1";
      Links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 200) {
            currentSection = link.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box fontSize={"12px"} w={"100%"} padding={{base : "0px 20px", md : "0px 40px"}} bg={"transparent"}>
        <Flex h={"10vh"} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image
              w={"80%"}
              src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1741593004/Zura-Tech-Logo-169_1_ogc6la.png"
            />
          </Box>

          <HStack
            bg={"#fafafa"}
            padding={"10px"}
            borderRadius={"20px"}
            as={"nav"}
            spacing={6}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <Box
                as="a"
                key={link.id}
                px={2}
                py={1}
                rounded={"md"}
                fontWeight={600}
                cursor="pointer"
                _hover={{ textDecoration: "none", color: "#a39cf4" }}
                color={activeSection === link.id ? "#a39cf4" : "black"}
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </Box>
            ))}
          </HStack>
          <Flex gap={4}>
            <Button
              leftIcon={<FaPhoneVolume size={"18px"} />}
              borderRadius={"20px"}
              fontSize={"12px"}
              bg={"#a39cf4"}
            >
              Contact us
            </Button>
            <IconButton
              bg={"#a39cf4"}
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            borderRadius={"8px"}
            p={4}
            display={{ md: "none" }}
            style={{
              transform: "translateY(10px)",
              transition: "opacity 2s ease, transform 0.4s ease",
              willChange: "opacity, transform",
            }}
          >
            <Stack bg={"#fafafa"} as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Box
                  as="a"
                  key={link.id}
                  px={2}
                  py={1}
                  rounded={"md"}
                  fontWeight={600}
                  cursor="pointer"
                  _hover={{ textDecoration: "none", color: "#F89700" }}
                  color={activeSection === link.id ? "#F89700" : "black"}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.name}
                </Box>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
