import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Textarea,
  useColorMode,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "../styles/home.module.css";
import servicesData from "../components/servicesData";
import ServiceCard from "../components/ServiceCard";
import Earth from "../components/Earth";
import LogoSlider from "../components/LogoSlider";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import ProjectCard from "../components/ProjectCard";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SiTicktick } from "react-icons/si";
import StarfieldCanvas from "../components/StarComp";
import Orbit from "../components/OrbittingIcons";

const HomePage = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projData = [
    {
      id: 2,
      title: "Indian Railways",
      description: `We took up the project for building a file 
                    management system for the Kharagpur division of Indian 
                    Railways.`,
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/indianr_ym7znk.png",
      cat: "IT",
    },
    {
      id: 1,
      title: "Fennex",
      description:
        "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390974/fenexx_piedeq.png",
      cat: "IT TECH",
    },
    {
      id: 10,
      title: "Absolute Realty",
      description: `We took up the project for building the client-facing, fully interactive website for Absolute Realty`,
      image:
        "https://storage.yandexcloud.net/backend-content-absolute/media/c/adv/img/02_1440x900_64Q9w0I/ac223aa64f62659b25bcb248863f599c.webp",
      cat: "Real Estate",
    },
  ];

  const features = [
    "Industry Experts",
    "Big Data Analysis",
    "24/7 Online Support",
    "High Quality Security",
    "Custom Business Solutions",
    "Advanced AI Tools",
  ];

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      email,
      message,
      access_key: "f0582280-61e4-44a7-9e0e-8248818fb416",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Thanks for contacting us!",
          description: "Our team will reach out to you shortly!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setMail("");
        setName("");
        setMessage("");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      bg={colorMode === "dark" ? null : "#fcfcfc"}
      display="flex"
      justifyContent="center"
      flexDir={"column"}
      alignItems={"center"}
    >
      <Box
        className={styles.heroSec}
        w="100%"
        h={{ base: "80vh", md: "100vh" }}
        position="relative"
        overflow="hidden"
      >
        {/* Starfield Background */}
        <Box
          className="canvas"
          as="div"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          zIndex={0}
        >
          <StarfieldCanvas />
        </Box>

        {/* Earth Component */}
        <Box
          className="planetContainer"
          position="relative"
          zIndex={2}
          mt={{ base: 4, md: 8 }}
          mx="auto"
        >
          <Earth />
        </Box>

        {/* Text Overlay */}
        <Box
          pos="absolute"
          top={0}
          left={0}
          zIndex={3}
          w="100%"
          h="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          px={4}
        >
          <Text
            fontSize={{ base: "28px", md: "42px", lg: "40px" }}
            fontWeight={600}
            color="white"
          >
             Imagination Meets Engineering
          </Text>
          <Text
            textAlign={"justify"}
            w={{ base: "100%", md: "800px" }}
            maxW="1300px"
            mt={2}
            color="white"
            font
          >
            Zura-Tech is a creative tech powerhouse driving innovation across
            Architectural Visualisation, Games, Web3, AI, and immersive
            experiences. We don’t just build software — we shape ecosystems for
            the next generation.
          </Text>
          <Flex mt={4} align="center" gap={4} justify="center">
            <Button
              fontWeight={400}
              bg="#5e90f1"
              onClick={() => navigate("/about")}
            >
              Know More
            </Button>
            <Button
              fontWeight={600}
              bg="#5e90f1"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </Flex>
        </Box>
      </Box>

      {/* Clients Section */}
      <Box
        bg={colorMode === "dark" ? "#1e232e" : "#f0f2f9"}
        className={styles.clientsSec}
        py={16}
      >
        <Text fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
          Clients & Believers
        </Text>
        <LogoSlider />
      </Box>

      <Box
        maxWidth={{ base: "100%", md: "80%" }}
        mt={8}
        px={{ base: 4, md: 4 }}
      >
        {/* Services */}
        <Box className={styles.servicesSec}>
          <Text fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
            Our Services
          </Text>
          <Text
            textAlign="center"
            m="20px auto"
            w={{ base: "100%", md: "60%" }}
          >
            We offer end-to-end solutions for all your tech and digital needs,
            from development and design to digital marketing, ensuring seamless
            and high-quality results that drive business success.
          </Text>
          <Box className={styles.cards}>
            {servicesData.map((e, index) => (
              <ServiceCard key={index} data={e} />
            ))}
          </Box>
        </Box>

        {/* Latest Projects */}
        <Box w="100%" py={16}>
          <Text fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
            Case Studies
          </Text>
          <Text
            textAlign="center"
            m="20px auto"
            w={{ base: "100%", md: "60%" }}
          >
            We offer end-to-end solutions for all your tech and digital needs,
            from development and design to digital marketing, ensuring seamless
            and high-quality results that drive business success.
          </Text>
          <Box mt="40px">
            <ProjectCard data={projData} />
            <Box>
              <Button
                padding="30px"
                width="180px"
                mt={8}
                borderRadius="none"
                bg="#4A6CF7"
                color="white"
                rightIcon={<FaArrowRight />}
                onClick={() => navigate("/projects")}
              >
                Show More
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Statistics */}
        <Box w="100%" py={16}>
          <Statistics />
        </Box>

        {/* Testimonials */}
        <Box w="100%" py={16}>
          <Testimonials />
        </Box>

        {/* Our expert section */}
        <Box h={{ base: "fit-content", md: "80vh" }} w={"100%"} py={16}>
          <Text fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
            Our Experts
          </Text>

          <Flex
            flexDir={{ base: "column", md: "row" }}
            className={styles.team}
            w={"100%"}
            h={"100%"}
          >
            <Box
              display="flex"
              alignItens="center"
              justifyContent="start"
              textAlign={"start"}
              // border='1px solid red'
              flexDir={"column"}
              py={10}
            >
              <Text fontSize={{ base: "18px", md: "28px" }} fontWeight={600}>
                We Deal With The Aspects Of Professional IT Services
              </Text>
              <Text mt={4}>
                At Zura Tech, we offer comprehensive IT services that drive
                digital transformation for your business. We provide
                user-friendly solutions that streamline supply chains and
                optimize operations, driving sustainable growth.
              </Text>
              <Box mt={4}>
                {features.map((feature, index) => (
                  <Flex
                    key={index}
                    align="center"
                    gap={4}
                    mt={index !== 0 ? 4 : 0}
                  >
                    <SiTicktick size="28px" color="#4A6CF7" />
                    <Text fontWeight={600} fontSize="lg">
                      {feature}
                    </Text>
                  </Flex>
                ))}
              </Box>
              <Button
                padding="30px"
                width="220px"
                mt={8}
                borderRadius="none"
                bg="#4A6CF7"
                color="white"
                rightIcon={<FaArrowRight />}
                onClick={() => navigate("/team")}
              >
                Meet Our Experts
              </Button>
            </Box>
            <Box display={{ base: "none", md: "block" }} w={"100%"} h={"100vh"}>
              <Orbit />
            </Box>
          </Flex>
        </Box>

        {/* Contact Section */}
        <Box className={styles.contact} w={"100%"} py={16}>
          <Box
            bg={colorMode === "dark" ? "#121723" : "#ffffff"}
            m={"auto"}
            w={{ base: "100%", md: "80%" }}
          >
            <Text fontSize={"34px"} fontWeight={600}>
              Need help? Email us
            </Text>
            <Text color={"grey"}>
              Our support team will get back to you ASAP via email.
            </Text>
            <form onSubmit={onFormSubmit}>
              <Flex mt={8} gap={4} flexDir={{ base: "column", md: "row" }}>
                <Box flex={1}>
                  <label>Your Name</label>
                  <Input
                    borderRadius={"none"}
                    h={"6vh"}
                    mt={2}
                    type="text"
                    placeholder="Enter name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box flex={1}>
                  <label>Your Email</label>
                  <Input
                    mt={2}
                    borderRadius={"none"}
                    h="6vh"
                    type="email"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setMail(e.target.value)}
                  />
                </Box>
              </Flex>
              <Box mt={8}>
                <label>Your Message</label>
                <Textarea
                  borderRadius={"none"}
                  mt={2}
                  placeholder="Enter your message"
                  minH={"20vh"}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Box>
              <Box mt={8}>
                <Button
                  bg={"#4A6CF7"}
                  color="white"
                  borderRadius={"none"}
                  h={"60px"}
                  w="100%"
                  type="submit"
                  _hover={{ bg: "#3854c8" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Spinner size="md" color="white" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
