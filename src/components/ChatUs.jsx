import React, { useEffect, useState } from "react";
import styles from "../styles/chat.module.css";
import { Box, IconButton, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { FiX } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";

const ChatUs = () => {
  const [isIconsOpen, setIsIconsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const toggleIcons = () => {
    setIsIconsOpen(!isIconsOpen);
    setShowForm(false);
    setShowLabel(false);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/+919631187569?text=Hello, I want to know more about Lost Horizon.",
      "_blank"
    );
  };

  const dismissLabel = () => {
    setShowLabel(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box position="fixed" zIndex={2000} bottom="20px" right="20px">
      <Flex align="center" justify="flex-end" gap={2}>
        {/* Speech Bubble Label */}
        {showLabel && (
          <Box
            as={motion.div}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            position="relative"
            bg="white"
            color="black"
            px={3}
            py={2}
            borderRadius="md"
            boxShadow="lg"
            fontSize="sm"
            maxW="160px"
            _after={{
              content: "''",
              position: "absolute",
              right: "-8px",
              top: "50%",
              transform: "translateY(-50%)",
              borderWidth: "8px",
              borderStyle: "solid",
              borderColor: "transparent transparent transparent white",
            }}
          >
            <Flex align="center" justify="space-between">
              <Text fontWeight="600">Need help?</Text>
              <IconButton
                icon={<FiX size="14px"  />}
                size="xs"
                variant="ghost"
                onClick={dismissLabel}
                aria-label="Dismiss"
                ml={2}
              />
            </Flex>
          </Box>
        )}

        {/* Chat Button */}
        <Box className={`${styles.glow} ${showLabel ? styles.shake : ""}`}>
          <IconButton
            w="60px"
            h="60px"
            bg="#5e90f1"
            _hover={{ background: "#5e90f6" }}
            icon={
              isIconsOpen || showForm ? (
                <FiX color="white" size="28px" />
              ) : (
                <IoMdCall color="white" size="28px" />
              )
            }
            aria-label="Chat with us"
            borderRadius="full"
            onClick={toggleIcons}
            zIndex="2"
          />
        </Box>
      </Flex>

      {/* Floating Icons */}
      {isIconsOpen && (
        <Box position="absolute" bottom="70px" right="0">
          <IconButton
            w="60px"
            h="60px"
            borderRadius="full"
            as={motion.div}
            icon={<IoMdCall size="28px" color="white" />}
            aria-label="Call Us"
            bg="#5e90f1"
            color="white"
            onClick={() => window.open("tel:+919631187569", "_self")}
            mb={3}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            cursor="pointer"
          />
          <IconButton
            w="60px"
            h="60px"
            borderRadius="full"
            as={motion.div}
            icon={<SiWhatsapp size="28px" color="white" />}
            aria-label="WhatsApp"
            bg="#5e90f1"
            color="white"
            onClick={openWhatsApp}
            mb={3}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            cursor="pointer"
          />
        </Box>
      )}
    </Box>
  );
};

export default ChatUs;
