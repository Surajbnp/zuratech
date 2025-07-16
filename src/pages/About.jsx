import { Box, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import TeamCard from "../components/TeamCard";

const About = () => {
  const { colorMode } = useColorMode();
 
  return (
    <Box
      color={colorMode === "dark" ? "whiteAlpha.800" : "gray.700"}
      w={"100%"}
      m={" auto"}
      p={6}
    >
      {/* CEO Section */}
      <Box maxW="1300px" mx="auto">
        <Flex
          alignItems={"start"}
          direction={{ base: "column-reverse", lg: "row-reverse" }}
          align="center"
          gap={10}
          mt={"120px"}
        >
          <Box
            flexShrink={0}
            w={{ base: "100%", lg: "400px" }}
            h={{ base: "400px", lg: "500px" }}
            bgImage="url('https://res.cloudinary.com/dddnxiqpq/image/upload/v1744105425/4a05e51d-6e8b-4595-9275-e0c907b230dd.png')"
            bgPos="center"
            bgSize="cover"
            borderRadius="lg"
            boxShadow="xl"
          />

          <Box flex={1} textAlign="start">
            <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="bold">
              Meet Our Team
            </Text>
            <Text fontSize="18px" mt={4} lineHeight={1.8}>
              At Zura Tech, our team is a diverse group of innovators,
              technologists, designers, and strategists committed to driving
              meaningful change through technology. With expertise spanning
              digital transformation, product design, development, and strategy,
              we work together to create sustainable, accessible, and
              world-class solutions. United by a shared passion for innovation,
              empathy, and impact, we turn bold ideas into powerful digital
              experiences.
            </Text>
          </Box>
        </Flex>

        <Flex
          alignItems={"start"}
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
          gap={10}
          mt={"80px"}
        >
          <Box
            flexShrink={0}
            w={{ base: "100%", lg: "400px" }}
            h={{ base: "400px", lg: "500px" }}
            bgImage="url('https://res.cloudinary.com/dddnxiqpq/image/upload/v1743869772/abhishek_crwzle.jpg')"
            bgPos="center"
            bgSize="cover"
            borderRadius="lg"
            boxShadow="xl"
          />

          <Box flex={1} textAlign="start">
            <Text fontSize={{ base: "24px", md: "32px" }} fontWeight="bold">
              Meet Our Visionary Founder
            </Text>
            <Text fontSize="18px" mt={4} lineHeight={1.8}>
              Abhishek Sagar is a Serial Entrepreneur and Creative Technologist
              from London. With 14+ years in Digital Transformation, he has
              pioneered award-winning ventures like Zuraverse and Khanaman,
              always rooted in innovation, empathy, and impact. Zura Tech is his
              mission to make world-class solutions accessible and sustainable.
            </Text>

            <Box mt={8}>
              <Text fontSize="22px" fontWeight="bold">
                Abhishek Sagar
              </Text>
              <Text fontWeight="medium">Founder & CEO</Text>
              <Box mt={3}>
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

      {/* Core Values Section */}
      <Box
        bg={colorMode === "light" ? "gray.50" : null}
        py={20}
        px={6}
        textAlign="center"
      >
        <Text fontSize="32px" fontWeight="bold" mb={10}>
          Our Core Values
        </Text>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={8}
          justify="center"
          align="stretch"
          maxW="1100px"
          mx="auto"
        >
          {[
            {
              title: "Innovation",
              desc: "We constantly evolve with trends, tools, and ideas to deliver future-ready solutions.",
            },
            {
              title: "Sustainability",
              desc: "We prioritize long-term impact, building tech that supports people and planet.",
            },
            {
              title: "Client-Centric",
              desc: "We listen, understand, and collaborate with clients to exceed expectations.",
            },
          ].map((val, i) => (
            <Box
              key={i}
              p={6}
              border={`1px solid ${
                colorMode === "dark" ? "whiteAlpha.800" : "gray.700"
              }`}
              borderRadius="lg"
              boxShadow="md"
              maxW="300px"
              textAlign="left"
            >
              <Text fontSize="20px" fontWeight="bold" mb={2}>
                {val.title}
              </Text>
              <Text fontSize="16px" color="gray.600">
                {val.desc}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* team */}
      {/* <Box mb={"80px"}>
        <TeamCard data={projects} />
      </Box> */}

      {/* Vision Section */}
      <Box py={20} px={6} bg={"#5e90f1"} textAlign="center">
        <Text fontSize="32px" fontWeight="bold" color={"white"}>
          Empowering the Next Generation of Digital Brands
        </Text>
        <Text fontSize="18px" maxW="800px" mx="auto" mt={4} color="white">
          Our vision is to shape a world where businesses of every size harness
          the power of design and technology to innovate and grow meaningfully.
        </Text>
      </Box>

      {/* CTA Section */}
      <Box py={20} px={6} textAlign="center">
        <Text fontSize="30px" fontWeight="bold" mb={6}>
          Let’s Build Something Great Together
        </Text>
        <Button
          size="lg"
          color={"white"}
          bg="#5e90f1"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default About;
