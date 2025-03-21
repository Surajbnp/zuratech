import React from "react";
import styles from "../styles/servicedetail.module.css";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaAnglesRight } from "react-icons/fa6";
import Statistics from "../components/Statistics";
import FAQAccordion from "../components/FAQAccordion";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

const ProjDetails = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer web development, design, and consulting.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us through our contact form or via WhatsApp at +919234851174.",
    },
    {
      question: "Do you provide custom solutions?",
      answer:
        "Yes, we provide tailored solutions based on your business needs.",
    },
  ];

  return (
    <Box className={styles.container}>
      <Box className={styles.tab} position="relative">
        <Image
          objectFit="cover"
          w="100%"
          h="100%"
          src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1742453338/592d2a1c-82ee-4698-9072-9d91d5cfdab4_i6lyqk.jpg"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
          fontSize={{ base: "2xl", md: "6xl" }}
          fontWeight="bold"
          px={4}
          py={2}
          borderRadius="md"
        >
          Fennex
        </Box>
      </Box>
      <Box className={styles.main}>
        <Box className={styles.left}>
          <Box className={styles.imgSec}>
            <Image
              w={"100%"}
              h={"100%"}
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background-illustrated_23-2149050187.jpg?t=st=1742454344~exp=1742457944~hmac=d9fede497d327a2b26f0934f244d404b955db8957b70e4d23a90c4dfdacc7b38&w=996"
            />
          </Box>
          <Box className={styles.desc}>
            <Text color={"#a39cf4"} fontSize={"4xl"} fontWeight={600}>
              Fennex Solution
            </Text>
            <Text mt={"10px"}>
              Effectively improve returns by engaging with online markets.
              Clearly communicate digital solutions that drive change with low
              risk and high rewards. Quickly optimize data for easy use across
              platforms. Ensure cost-effective returns before using external
              resources. Strategically plan and implement solid, practical
              solutions without relying on last-minute strategies.
            </Text>
          </Box>
          <Box textAlign={"start"} mt={"40px"}>
            <Text color={"#a39cf4"} fontSize={"4xl"} fontWeight={600}>
              We Server The Best Work
            </Text>
            <Flex flexDir={"column"} mt={4} gap={2}>
              <Flex fontSize={"18px"} align={"center"} gap={4}>
                <Box>
                  <FaAnglesRight />
                </Box>
                <Text>Mobile Game Development</Text>
              </Flex>
              <Flex fontSize={"18px"} align={"center"} gap={4}>
                <Box>
                  <FaAnglesRight />
                </Box>
                <Text>Mobile Game Development</Text>
              </Flex>

              <Flex fontSize={"18px"} align={"center"} gap={4}>
                <Box>
                  <FaAnglesRight />
                </Box>
                <Text>Mobile Game Development</Text>
              </Flex>
            </Flex>
          </Box>
          <Box textAlign={"start"}>
            <Box>
              <Statistics color={"#a39cf4"} />
            </Box>
          </Box>
          <Box mt={8} textAlign={"start"}>
            <Box>
              <FAQAccordion faqs={faqs} />
            </Box>
          </Box>
        </Box>
        <Box className={styles.right}>
          <Box>
            <Text color={"#a39cf4"} fontWeight={600} fontSize={"26px"}>
              Project Details
            </Text>
            <Flex mt={"20px"} flexDir={"column"} gap={6}>
              <Flex w={"100%"} gap={4} align={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  border={"2px solid #a39cf4"}
                  w={"60px"}
                  h={"60px"}
                  borderRadius={"8px"}
                >
                  <FaUser size={"30px"} />
                </Box>
                <Flex
                  align={"start"}
                  flexDir="column"
                  border={"2px solid #a39cf4"}
                  flex={1}
                  padding={"4px"}
                  borderRadius={"8px"}
                  pl={4}
                >
                  <Text fontWeight={600}>Client</Text>
                  <Text>David Jackson</Text>
                </Flex>
              </Flex>
              <Flex w={"100%"} gap={4} align={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  border={"2px solid #a39cf4"}
                  w={"60px"}
                  h={"60px"}
                  borderRadius={"8px"}
                >
                  <BiSolidCategory size={"30px"} />
                </Box>
                <Flex
                  align={"start"}
                  flexDir="column"
                  border={"2px solid #a39cf4"}
                  flex={1}
                  padding={"4px"}
                  borderRadius={"8px"}
                  pl={4}
                >
                  <Text fontWeight={600}>Category</Text>
                  <Text>Web Development</Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Text color={"#a39cf4"} fontWeight={600} fontSize={"26px"}>
              Download Brochure
            </Text>
            <Flex mt={4} flexDir={"column"} gap={4}>
              <Button
                h={"6vh"}
                fontWeight={500}
                borderRadius={"20px"}
                fontSize={"18px"}
                bg={"#a39cf4"}
              >
                Download PDF
              </Button>
              <Button
                h={"6vh"}
                fontWeight={500}
                borderRadius={"20px"}
                fontSize={"18px"}
                bg={"#a39cf4"}
              >
                Download Doc
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjDetails;
