import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import Zoom from "react-reveal/Zoom";
import ServiceCard from "../components/ServiceCard";
import { WiDirectionRight } from "react-icons/wi";
import Testimonials from "../components/Testimonials";
import Statistics from "../components/Statistics";
import Contact from "../components/Contact";
import LogoSlider from "../components/LogoSlider";
import ProjectShowcase from "../components/ProjectCardSlider";

const sections = ["sec1", "sec2", "sec3"];

const HomePage = () => {
  const [activeSection, setActiveSection] = useState("sec1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let newActiveSection = activeSection;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.clientHeight;

          if (scrollY >= sectionTop - sectionHeight / 2) {
            newActiveSection = section;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const servicesData = [
    {
      name: "ArcViz Development",
      icon: "https://cdn.lordicon.com/jeuxydnh.json",
    },
    {
      name: "WebApp Development",
      icon: "https://cdn.lordicon.com/ogjpwrxe.json",
    },
    {
      name: "MobileApp Development",
      icon: "https://cdn.lordicon.com/ailnzwyn.json",
    },
    {
      name: "AR/VR Development",
      icon: "https://cdn.lordicon.com/oajcrtsi.json",
    },
    {
      name: "AI Agent",
      icon: "",
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741767448/Screenshot_2025-03-12_134623_glrugw.png",
    },
    {
      name: "TG Mini Apps",
      icon: "https://cdn.lordicon.com/gsfkpjbl.json",
    },
    {
      name: "Game Development",
      icon: "https://cdn.lordicon.com/caxgkjgi.json",
    },
    {
      name: "Chat Bot",
      icon: "",
      img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741767757/Screenshot_2025-03-12_135227_xhpwup.png",
    },
    {
      name: "Web3 Development",
      icon: "https://cdn.lordicon.com/rpviwvwn.json",
    },
  ];

  const clients = [
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607553/client1_vsswxc.png",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607553/client5_harpjr.png",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607553/client6_asx9hj.png",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607552/client2_oumibj.png",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607552/client3_mjnnk6.png",
    "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607552/client4_og9ui4.png",
  ];

  return (
    <>
      {/* Section 1 */}
      <Box id="sec1" className={styles.cont} h="100vh">
        <Box className={styles.details}>
          <Zoom>
            <Text>Dive Deep Into Innovation Zuratech</Text>
            <Text fontSize={"32px"}>
              Drive Your Startup Forward With Growth Hacking Expertise!
            </Text>
            <Flex mt={4} gap={4} align={"center"}>
              <Button
                bg={"#a39cf4"}
                borderRadius={"18px"}
                className={styles.button}
                onClick={() => scrollToSection("sec2")}
              >
                Start To Grow
              </Button>
              <Button
                bg={"#a39cf4"}
                borderRadius={"20px"}
                onClick={() => scrollToSection("sec2")}
              >
                Why Us?
              </Button>
            </Flex>
          </Zoom>
        </Box>
      </Box>

      {/* Section 2 */}
      <Box id="sec2" className={styles.services} bg="gray.200">
        <Flex justify={"start"} flexDirection={"column"}>
          <Box
            textAlign={"start"}
            className={styles.heading}
            lineHeight={"60px"}
          >
            <Box>
              <Flex gap={4} align={"end"}>
                <Text fontSize={"66px"}>Our Services</Text>
                <WiDirectionRight style={{ transform: "scale(2.5)" }} />
              </Flex>
              <Text>Discover Your Path To Success</Text>
            </Box>
          </Box>
          <Text mt={4} align={"start"} className={styles.para}>
            At Zura Tech Solutions, we specialize in driving digital
            transformation to help your business thrive in the modern era. From
            innovative technology solutions to tailored strategies, we enable
            seamless integration of advanced tools that boost efficiency,
            enhance customer experience, and deliver measurable growth.
          </Text>
          <Box
            w={"fit-content"}
            borderRadius={"20px"}
            overflow={"hidden"}
            mt={"40px"}
          >
            <Image src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1741760867/Patterns-5-15_yg2hh9.png" />
          </Box>
        </Flex>
        <Box display="grid" gridTemplateColumns={["1fr", "1fr 1fr"]} gap="20px">
          {servicesData?.map((e, index) => (
            <Box
              key={index}
              border="1px solid #fafafa"
              p="20px"
              borderRadius="10px"
              display="flex"
              flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
              alignItems="center"
            >
              <ServiceCard data={e} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Trusted by */}
      <Box>
        <LogoSlider images={clients} />
      </Box>

      {/* our projects */}
      <Box>
        <ProjectShowcase />
      </Box>

      {/* Section 3 */}
      <Box id="sec3" h="fit-content">
        <Testimonials />
      </Box>

      {/* statistics */}
      <Box minH={'35vh'} bg={useColorModeValue("gray.100", "gray.700")} id="sec4">
        <Statistics textAlign={'center'}  />
      </Box>

      {/* contact */}
      <Box>
        <Contact />
      </Box>
    </>
  );
};

export default HomePage;
