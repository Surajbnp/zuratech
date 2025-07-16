import React, { useEffect, useState } from "react";
import styles from "../styles/servicedetail.module.css";
import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { SiTicktick } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import FAQAccordion from "./FAQAccordion";
import Projects from "./projectsData";
import { useParams } from "react-router-dom";

const ProjDetails = () => {
  const { colorMode } = useColorMode();
  const { id } = useParams();
  const [project, setProject] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer: (
        <>
          We offer a comprehensive range of services, including{" "}
          <span style={{ fontWeight: "bold" }}>
            Web Development, UI/UX Design, Mobile App Development, Blockchain
            Solutions, Cloud Services, AI/ML Solutions, Game Development, and IT
            Consulting
          </span>
          .
        </>
      ),
    },
    {
      question: "How can I contact customer support?",
      answer: (
        <>
          You can reach out through our{" "}
          <span style={{ fontWeight: "bold" }}>contact form</span>, email us at{" "}
          <span style={{ fontWeight: "bold" }}>sagar@zuraverse.xyz</span>, or
          message us on{" "}
          <span style={{ fontWeight: "bold" }}>
            WhatsApp at +91 96311 87569
          </span>
          .
        </>
      ),
    },
    {
      question: "Do you provide custom solutions?",
      answer: (
        <>
          Yes, we specialize in{" "}
          <span style={{ fontWeight: "bold" }}>tailored digital solutions</span>{" "}
          designed to meet your unique business requirements.
        </>
      ),
    },
    {
      question: "Do you offer Blockchain Development?",
      answer: (
        <>
          Absolutely. Our team delivers expert{" "}
          <span style={{ fontWeight: "bold" }}>Blockchain Development</span>{" "}
          services, including{" "}
          <span style={{ fontWeight: "bold" }}>
            Smart Contract Development, NFT Platforms, DeFi Applications, and
            Crypto Wallet Integration
          </span>
          .
        </>
      ),
    },
    {
      question: "Can you help with AI & Machine Learning solutions?",
      answer: (
        <>
          Yes, we provide advanced{" "}
          <span style={{ fontWeight: "bold" }}>AI/ML Solutions</span>, such as{" "}
          <span style={{ fontWeight: "bold" }}>
            Intelligent Chatbots, Predictive Analytics, and AI-driven Automation
          </span>
          .
        </>
      ),
    },
    {
      question: "Do you develop mobile applications?",
      answer: (
        <>
          Yes, we build high-performance{" "}
          <span style={{ fontWeight: "bold" }}>mobile apps</span> for{" "}
          <span style={{ fontWeight: "bold" }}>Android and iOS</span>, using{" "}
          <span style={{ fontWeight: "bold" }}>React Native and Flutter</span>{" "}
          for cross-platform solutions.
        </>
      ),
    },
    {
      question: "What technologies do you use?",
      answer: (
        <>
          Our technology stack includes{" "}
          <span style={{ fontWeight: "bold" }}>
            React, Node.js, Next.js, Python, MongoDB, AWS, Solidity, TensorFlow,
            and more
          </span>
          , ensuring modern, scalable, and secure solutions.
        </>
      ),
    },
    {
      question: "Do you offer Game Development services?",
      answer: (
        <>
          Yes, we create engaging and scalable{" "}
          <span style={{ fontWeight: "bold" }}>Game Development solutions</span>
          , including{" "}
          <span style={{ fontWeight: "bold" }}>
            Web-based Games, Play-to-Earn (P2E) Games, NFT Integration, and
            Cross-platform Development
          </span>
          .
        </>
      ),
    },
  ];

  useEffect(() => {
    const selectedProject = Projects.find((proj) => proj.id === Number(id));
    setProject(selectedProject);
  }, [id]);

  return (
    <Box
      className={styles.container}
      bg={colorMode === "dark" ? null : "#fcfcfc"}
      w={"100%"}
    >
      <Box maxW={"1300px"} className={styles.main} px={4}>
        <Box className={styles.left}>
          <Box className={styles.imgSec}>
            {/* {project?.image === "" ? ( */}
            <Image
              w={"100%"}
              h={"60vh"}
              src={project?.image}
              objectFit={"cover"}
              objectPosition={"center"}
            />
            {/* ) : null} */}
          </Box>
          <Box className={styles.desc}>
            <Text fontSize={{ base: "28px", md: "36px" }} fontWeight={600}>
              {project?.name}
            </Text>
            <Text mt={"10px"}>{project?.desc}</Text>
          </Box>
          <Box>
            <Box className={`${styles.right} ${styles.details}`} mt={10}>
              <Box bg={colorMode === "dark" ? "#121723" : "#ffffff"}>
                <Text fontWeight={600} fontSize={"22px"}>
                  Project Details
                </Text>
                <Flex mt={"20px"} flexDir={"column"} gap={6}>
                  <Flex w={"100%"} gap={4} align={"center"}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#4A6CF7"}
                      w={"60px"}
                      h={"60px"}
                    >
                      <FaUser size={"30px"} />
                    </Box>
                    <Flex
                      align={"start"}
                      flexDir="column"
                      border={"1px solid #4A6CF7"}
                      flex={1}
                      padding={"4px"}
                      pl={4}
                    >
                      <Text fontWeight={600}>Client</Text>
                      <Text>{project?.client}</Text>
                    </Flex>
                  </Flex>
                  <Flex w={"100%"} gap={4} align={"center"}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#4A6CF7"}
                      w={"60px"}
                      h={"60px"}
                    >
                      <BiSolidCategory size={"30px"} />
                    </Box>
                    <Flex
                      align={"start"}
                      flexDir="column"
                      border={"1px solid #4A6CF7"}
                      flex={1}
                      padding={"4px"}
                      pl={4}
                    >
                      <Text fontWeight={600}>Category</Text>
                      <Text>{project?.cat}</Text>
                    </Flex>
                  </Flex>
                  <Flex w={"100%"} gap={4} align={"center"}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#4A6CF7"}
                      w={"60px"}
                      h={"60px"}
                    >
                      <BsCalendar2DateFill size={"30px"} />
                    </Box>
                    <Flex
                      align={"start"}
                      flexDir="column"
                      border={"1px solid #4A6CF7"}
                      flex={1}
                      padding={"4px"}
                      pl={4}
                    >
                      <Text fontWeight={600}>Date</Text>
                      <Text>{project?.date}</Text>
                    </Flex>
                  </Flex>
                  <Flex w={"100%"} gap={4} align={"center"}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      bg={"#4A6CF7"}
                      w={"60px"}
                      h={"60px"}
                    >
                      <FaLocationDot size={"30px"} />
                    </Box>
                    <Flex
                      align={"start"}
                      flexDir="column"
                      border={"1px solid #4A6CF7"}
                      flex={1}
                      padding={"4px"}
                      pl={4}
                    >
                      <Text fontWeight={600}>Location</Text>
                      <Text>{project?.add}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
              <Box bg={colorMode === "dark" ? "#121723" : "#ffffff"}>
                <Text fontWeight={600} fontSize={"22px"}>
                  Download Brochure
                </Text>
                <Flex mt={4} flexDir={"column"} gap={4}>
                  <Button
                    h={"6vh"}
                    fontWeight={500}
                    borderRadius={"none"}
                    fontSize={"18px"}
                    bg={"#4A6CF7"}
                    color={"white"}
                  >
                    Download PDF
                  </Button>
                  {/* <Button
                    h={"6vh"}
                    fontWeight={500}
                    borderRadius={"none"}
                    fontSize={"18px"}
                    bg={"#4A6CF7"}
                    color={"white"}
                  >
                    Download Doc
                  </Button> */}
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box
            p={8}
            w={"100%"}
            textAlign={"start"}
            mt={"40px"}
            bg={colorMode === "dark" ? "#121723" : "#ffffff"}
            height={"fit-content"}
            boxShadow={`rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`}
          >
            <Text fontWeight={600} fontSize={"22px"}>
              The challenge of project
            </Text>
            <Text mt={2}>{project?.challenges}</Text>
            {project?.solution &&
              project?.solution?.map((e, index) => {
                return (
                  <Flex key={id} align={"center"} gap={4} mt={4}>
                    <SiTicktick size={"32px"} color="#4A6CF7" />
                    <Text fontWeight={600}>{e}</Text>
                  </Flex>
                );
              })}
          </Box>
          <Box
            p={8}
            w={"100%"}
            textAlign={"start"}
            mt={"40px"}
            bg={colorMode === "dark" ? "#121723" : "#ffffff"}
            height={"fit-content"}
            boxShadow={`rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px`}
          >
            <Text fontWeight={600} fontSize={"22px"}>
              The result of project
            </Text>
            <Text>{project?.result}</Text>
            <Box className={styles.imgSec} mt={4}>
              <Image
                w={"100%"}
                src={project?.resultImg}
                objectFit={"cover"}
                objectPosition={"center"}
                alt="resultImg"
                h={"60vh"}
              />
            </Box>
          </Box>
          <Box>
            <FAQAccordion faqs={faqs} />
          </Box>
        </Box>
        <Box className={styles.right}>
          <Box bg={colorMode === "dark" ? "#121723" : "#ffffff"}>
            <Text fontWeight={600} fontSize={"22px"}>
              Project Details
            </Text>
            <Flex mt={"20px"} flexDir={"column"} gap={6}>
              <Flex w={"100%"} gap={4} align={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#4A6CF7"}
                  w={"60px"}
                  h={"60px"}
                >
                  <FaUser size={"30px"} />
                </Box>
                <Flex
                  align={"start"}
                  flexDir="column"
                  border={"1px solid #4A6CF7"}
                  flex={1}
                  padding={"4px"}
                  pl={4}
                >
                  <Text fontWeight={600}>Client</Text>
                  <Text>{project?.client}</Text>
                </Flex>
              </Flex>
              <Flex w={"100%"} gap={4} align={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#4A6CF7"}
                  w={"60px"}
                  h={"60px"}
                >
                  <BiSolidCategory size={"30px"} />
                </Box>
                <Flex
                  align={"start"}
                  flexDir="column"
                  border={"1px solid #4A6CF7"}
                  flex={1}
                  padding={"4px"}
                  pl={4}
                >
                  <Text fontWeight={600}>Category</Text>
                  <Text>{project?.cat}</Text>
                </Flex>
              </Flex>
              <Flex w={"100%"} gap={4} align={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#4A6CF7"}
                  w={"60px"}
                  h={"60px"}
                >
                  <BsCalendar2DateFill size={"30px"} />
                </Box>
                <Flex
                  align={"start"}
                  flexDir="column"
                  border={"1px solid #4A6CF7"}
                  flex={1}
                  padding={"4px"}
                  pl={4}
                >
                  <Text fontWeight={600}>Date</Text>
                  <Text>{project?.date}</Text>
                </Flex>
              </Flex>
              <Flex w={"100%"} gap={4} align={"center"}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#4A6CF7"}
                  w={"60px"}
                  h={"60px"}
                >
                  <FaLocationDot size={"30px"} />
                </Box>
                <Flex
                  align={"start"}
                  flexDir="column"
                  border={"1px solid #4A6CF7"}
                  flex={1}
                  padding={"4px"}
                  pl={4}
                >
                  <Text fontWeight={600}>Location</Text>
                  <Text>{project?.add}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box bg={colorMode === "dark" ? "#121723" : "#ffffff"}>
            <Text fontWeight={600} fontSize={"22px"}>
              Download Brochure
            </Text>
            <Flex mt={4} flexDir={"column"} gap={4}>
              <Button
                h={"6vh"}
                fontWeight={500}
                borderRadius={"none"}
                fontSize={"18px"}
                bg={"#4A6CF7"}
                color={"white"}
              >
                Download PDF
              </Button>
              {/* <Button
                h={"6vh"}
                fontWeight={500}
                borderRadius={"none"}
                fontSize={"18px"}
                bg={"#4A6CF7"}
                color={"white"}
              >
                Download Doc
              </Button> */}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjDetails;
