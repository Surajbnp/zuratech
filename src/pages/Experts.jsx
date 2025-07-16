import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import TeamCard from "../components/TeamCard";
import Globe from "../components/Globe";
import {
  FaApple,
  FaArrowRight,
  FaAws,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaShopify,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  SiAmazondynamodb,
  SiGooglecloud,
  SiKotlin,
  SiTicktick,
  SiTypescript,
} from "react-icons/si";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { IoLogoAndroid } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { FaFlutter } from "react-icons/fa6";
import { DiMongodb, DiSwift } from "react-icons/di";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

const Experts = () => {
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");

  const projects = [
    {
      id: 0,
      name: "Abhishek Sagar",
      title: "Creative Technologist",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743869772/abhishek_crwzle.jpg",
      linkedIn: "https://www.linkedin.com/in/asssagar/",
      tag: "business",
    },
    {
      id: 1,
      name: "Sunniy Khan",
      title: "Visual-Generalist",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743871395/2aef1a5f-e1d9-4498-9110-64357b35b606.png",
      linkedIn: "https://www.linkedin.com/in/sunniy-khan-455b7b16a/",
      tag: "business",
    },
    {
      id: 2,
      name: "Sawan Chouhan",
      title: "Game Developer",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743872046/cc945aa5-cd1f-487e-9ee5-39c8111a169c.png",
      linkedIn:
        "https://www.linkedin.com/in/sawan-chouahn-zuraverse-43008b194/",
      tag: "developer",
    },
    {
      id: 3,
      name: "Suraj Gupta",
      title: "Full Stack Developer",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743073434/Beige_Aesthetic_Feminine_Business_Twitter_Profile_Picture_ren5yn.svg",
      linkedIn: "https://www.linkedin.com/in/suraj-kumar-gupta-058191222/",
      portfolioUrl: "https://surajbnp.github.io/New-Portfolio/",
      tag: "developer",
    },
    {
      id: 4,
      name: "Neha",
      title: "Digital Marketer",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743871290/bc18f746-06a2-40b7-864e-ff34cc62978e.png",
      linkedIn: "https://www.linkedin.com/in/neha-mahto-454172245/",
      tag: "marketer",
    },
    {
      id: 5,
      name: "Tanishq",
      title: "Android Developer",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743871320/57135c4e-84cc-4b13-9939-bf0eaa2cbb44.png",
      linkedIn: "https://www.linkedin.com/in/tanish-ranjan/",
      tag: "developer",
    },
    {
      id: 6,
      name: "Priyank Shah",
      title: "DevOps Engineer",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1744089969/4bb208fc-24d8-405c-8c68-14e715ddcc2a.png",
      linkedIn: "https://www.linkedin.com/in/priyank-shah1912/",
      tag: "developer",
    },
    {
      id: 7,
      name: "Mohit",
      title: "Video Producer",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1744090192/a36afbe6-02af-46b6-940e-b4d14faecc3e.png",
      linkedIn: "https://www.linkedin.com/in/mohit-raj-773b9224b/",
      tag: "creator",
    },
  ];

  return (
    <Box maxW="1300px" mx="auto" pt={{ base: "60px", md: "120px" }} px={4}>
      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="start"
        justify="space-between"
        my={10}
        gap={12}
      >
        <Box
          flex={1}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            fontSize={{ base: "26px", md: "36px" }}
            mb={4}
            fontWeight={600}
            color={headingColor}
            fontFamily={`"Quicksand", sans-serif`}
          >
            Who We Are
          </Heading>
          <Text textAlign={'justify'} fontSize={{ base: "md", md: "lg" }} color={textColor}>
            At Zura, we bring together developers, creatives, and technologists
            who thrive on innovation and execution. Our team powers digital
            transformation for next-gen businesses across the globe.
          </Text>
        </Box>

        <Box flex={1} w="100%" h={{ base: "300px", md: "400px" }}>
          <Globe />
        </Box>
      </Flex>

      {/* Team Section */}
      <Box mb={20}>
        <TeamCard data={projects} />
      </Box>

      {/* Expertise Tags Section */}
      <Box mb={20}>
        <Heading
          fontFamily={`"Quicksand", sans-serif`}
          fontSize={{ base: "26px", md: "36px" }}
          fontWeight={600}
          mb={4}
          color={headingColor}
        >
          Areas of Expertise
        </Heading>
        <Flex wrap="wrap" gap={4} justify={{ base: "center", md: "center" }}>
          {[
            "Full Stack Development",
            "Game Design",
            "Visual Content",
            "DevOps",
            "Marketing",
            "Web3",
            "Video Production",
            "Architecural Visualization",
          ].map((skill, index) => (
            <Box
              key={index}
              // bg={useColorModeValue("gray.100", "gray.700")}
              px={4}
              py={2}
              borderRadius="xl"
              fontWeight="semibold"
              color={textColor}
              boxShadow="sm"
              // _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
            >
              {skill}
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Our Values Section */}
      <Box mb={20}>
        <Heading
          fontFamily={`"Quicksand", sans-serif`}
          fontSize={{ base: "26px", md: "36px" }}
          fontWeight={600}
          mb={4}
          color={headingColor}
        >
          Our Core Values
        </Heading>
        <Flex
          flexDir={"column"}
          // border="1px solid red"
          gap={3}
          color={textColor}
          alignItems={"center"}
        >
          <Text>
            💡 <strong>Innovation First:</strong> We strive to push boundaries
            and explore new ideas.
          </Text>
          <Text>
            🌍 <strong>Global Vision:</strong> We build with scale and
            inclusivity in mind.
          </Text>
          <Text>
            🤝 <strong>Team Synergy:</strong> Collaboration is at the heart of
            every successful product.
          </Text>
          <Text>
            📈 <strong>Results Matter:</strong> Every expert is focused on
            delivering real impact.
          </Text>
        </Flex>
      </Box>

      {/* Technologies We Use */}
      <Box mb={20}>
        {/* Technologies we have used */}
        <Box w="100%" h="fit-content" py={8}>
          <Text fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
            Technologies We Use
          </Text>
          <Box mt={8}>
            <Tabs variant="soft-rounded">
              <TabList
                display="flex"
                alignItems="center"
                justifyContent={{ base: "start", md: "center" }}
                gap={4}
                overflowX="auto"
                whiteSpace="nowrap"
                css={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <Tab
                  bg="#e6f0fa"
                  _selected={{ bg: "#5e90f1", color: "white" }}
                  border="1px solid grey"
                  _hover={{ border: "1px solid grey" }}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  Mobile
                </Tab>
                <Tab
                  bg="#e6f0fa"
                  _selected={{ bg: "#5e90f1", color: "white" }}
                  border="1px solid grey"
                  _hover={{ border: "1px solid grey" }}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  Frontend
                </Tab>
                <Tab
                  bg="#e6f0fa"
                  _selected={{ bg: "#5e90f1", color: "white" }}
                  border="1px solid grey"
                  _hover={{ border: "1px solid grey" }}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  Backend & DB
                </Tab>
                <Tab
                  bg="#e6f0fa"
                  _selected={{ bg: "#5e90f1", color: "white" }}
                  border="1px solid grey"
                  _hover={{ border: "1px solid grey" }}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  CMS
                </Tab>
                <Tab
                  bg="#e6f0fa"
                  _selected={{ bg: "#5e90f1", color: "white" }}
                  border="1px solid grey"
                  _hover={{ border: "1px solid grey" }}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  DevOps
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  gap="60px"
                  maxWidth="100%"
                  mt={"40px"}
                  sx={{
                    "& > *": {
                      flex: { base: "0 0 33.33%", lg: "0 0 20%" },
                      maxWidth: { base: "33.33%", lg: "20%" },
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaApple color="#5e90f1" fontSize="80px" /> iOS
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <IoLogoAndroid color="#5e90f1" fontSize="80px" /> Android
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <TbBrandReactNative color="#5e90f1" fontSize="80px" /> React
                    Native
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaFlutter color="#5e90f1" fontSize="80px" /> Flutter
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <DiSwift color="#5e90f1" fontSize="80px" /> Swift
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <SiKotlin color="#5e90f1" fontSize="80px" /> Kotlin
                  </Text>
                </TabPanel>
                <TabPanel
                  mt={"40px"}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  gap="60px"
                  maxWidth="100%"
                  sx={{
                    "& > *": {
                      flex: { base: "0 0 33.33%", lg: "0 0 20%" },
                      maxWidth: { base: "33.33%", lg: "20%" },
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <RiReactjsFill color="#5e90f1" fontSize="80px" /> ReactJs
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <RiNextjsFill color="#5e90f1" fontSize="80px" /> NextJs
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaVuejs color="#5e90f1" fontSize="80px" /> VueJs
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <SiTypescript color="#5e90f1" fontSize="80px" /> TypeScript
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaHtml5 color="#5e90f1" fontSize="80px" /> HTML5
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaCss3Alt color="#5e90f1" fontSize="80px" /> CSS3
                  </Text>
                </TabPanel>
                <TabPanel
                  mt={"40px"}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  gap="60px"
                  maxWidth="100%"
                  sx={{
                    "& > *": {
                      flex: { base: "0 0 33.33%", lg: "0 0 20%" },
                      maxWidth: { base: "33.33%", lg: "20%" },
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaNodeJs color="#5e90f1" fontSize="80px" /> NodeJs
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaPython color="#5e90f1" fontSize="80px" /> Python
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <DiMongodb color="#5e90f1" fontSize="80px" /> MongoDB
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <SiAmazondynamodb color="#5e90f1" fontSize="80px" />{" "}
                    DynamoDB
                  </Text>
                </TabPanel>
                <TabPanel
                  mt={"40px"}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                  maxWidth="100%"
                  sx={{
                    "& > *": {
                      flex: { base: "0 0 33.33%", lg: "0 0 20%" },
                      maxWidth: { base: "33.33%", lg: "20%" },
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaWordpress color="#5e90f1" fontSize="80px" /> WordPress
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaShopify color="#5e90f1" fontSize="80px" /> Shopify
                  </Text>
                </TabPanel>
                <TabPanel
                  mt={"40px"}
                  display="flex"
                  flexWrap="wrap"
                  alignItems="center"
                  justifyContent="center"
                  gap="20px"
                  maxWidth="100%"
                  sx={{
                    "& > *": {
                      flex: { base: "0 0 33.33%", lg: "0 0 20%" },
                      maxWidth: { base: "33.33%", lg: "20%" },
                      boxSizing: "border-box",
                    },
                  }}
                >
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <FaAws color="#5e90f1" fontSize="80px" /> AWS
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <SiGooglecloud color="#5e90f1" fontSize="80px" /> Google
                    Cloud
                  </Text>
                  <Text
                    display="flex"
                    gap={2}
                    flexDir="column"
                    alignItems="center"
                  >
                    <VscAzure color="#5e90f1" fontSize="80px" /> Azure
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        bg={useColorModeValue("gray.50", "gray.800")}
        py={12}
        px={6}
        borderRadius="2xl"
        textAlign="center"
        boxShadow="md"
        mb={16}
      >
        <Heading
          fontFamily={`"Quicksand", sans-serif`}
          fontSize={{ base: "26px", md: "36px" }}
          fontWeight={600}
          mb={4}
          color={headingColor}
        >
          Work With Our Experts
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} mb={6} color={textColor}>
          Want to build something exceptional? Let our team bring your ideas to
          life.
        </Text>
        <Box
          as="a"
          href="/contact"
          bg="#5e90f1"
          color="white"
          px={6}
          py={3}
          fontWeight="bold"
          borderRadius="full"
          _hover={{ bg: "blue.700" }}
        >
          Let’s Talk
        </Box>
      </Box>
    </Box>
  );
};

export default Experts;
