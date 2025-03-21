import React from "react";
import styles from "../styles/servicedetail.module.css";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FaAnglesRight } from "react-icons/fa6";
import Statistics from "../components/Statistics";
import FAQAccordion from "../components/FAQAccordion";

const ServiceDetailPage = () => {
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
          Game Development Details
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
              Game Development
            </Text>
            <Text mt={"10px"}>
              We help you grow your business by developing customized, engaging
              games that captivate your target audience. Our goal is to create
              immersive gaming experiences that enhance your brand presence,
              drive user engagement, and deliver results that help your business
              succeed in the digital entertainment world.
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
          <Text color={"#a39cf4"} fontWeight={600} fontSize={"26px"}>
            Download Brochure
          </Text>
          <Flex mt={4} flexDir={"column"} gap={4}>
            <Button borderRadius={"20px"} fontSize={"12px"} bg={"#a39cf4"}>
              Download PDF
            </Button>
            <Button borderRadius={"20px"} fontSize={"12px"} bg={"#a39cf4"}>
              Download Doc
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceDetailPage;
