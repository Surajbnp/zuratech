import React from "react";
import styles from "../styles/team.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import TeamCard from "../components/TeamCard";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
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
    <Box w={"100%"} m={"60px auto"} p={6}>
      <Box maxW={"1300px"} m={"auto"} py={6}>
        <Flex
          flexDir={{ base: "column", md: "column", lg: "row" }}
          gap={10}
          className={styles.ceoSec}
        >
          <Box className={styles.ceoImg}></Box>
          <Box textAlign={"start"} pos={"relative"}>
            <Text fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
              Driving Innovation & Sustainability in digital Transformation
            </Text>
            <Text fontSize={"20px"} mt={4}>
              An Serial Entrepreneur and Creative Technologist from London. He
              has over 14 years of experience in the field of Digital
              Transformation. From Award winning Startups like Zuraverse and
              Khanaman, to his initiatives towards sustainability, he has led
              through innovation and empathy. Zura Tech is driven by his Vision
              to provide Optimum solutions at best value.
            </Text>
            <Box w={"100%"} mt={8}>
              <Text fontWeight={600} fontSize={"32px"}>
                Abhishek Sagar
              </Text>
              <Text fontWeight={600}>Founder & CEO</Text>
              <Box mt={4}>
                <FaLinkedin
                  cursor="pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/asssagar/",
                      "_blank"
                    )
                  }
                  size="32px"
                  color="#0A66C2"
                />
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <TeamCard data={projects} />
    </Box>
  );
};

export default Team;
