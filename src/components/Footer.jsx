"use client";
import React from "react";
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      target="_blank"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      width={"100%"}
      overflow={"hidden"}
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1741593004/Zura-Tech-Logo-169_1_ogc6la.png" />
            </Box>
            <Text textAlign={"start"} fontSize={"sm"}>
              © 2025 Zuratech. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"https://x.com/Zuraverse"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={"https://www.youtube.com/@zuratechnologies7172"}
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={
                  "https://www.instagram.com/zura.tech?igsh=ZDd6aXVha2RzOXV0"
                }
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              About us
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Blog
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Contact us
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Testimonials
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Help Center
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Terms of Service
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Legal
            </Box>
            <Box
              as="button"
              onClick={() => navigate("/privacy-policy")}
              _hover={{ color: "#4A6CF7", textDecoration: "underline" }}
            >
              Privacy Policy
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={"#4A6CF7"}
                color={useColorModeValue("white")}
                _hover={{
                  bg: "#e5d1fa",
                  color: "black",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
