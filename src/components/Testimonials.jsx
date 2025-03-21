"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
  const { children } = props;

  return (
    <Stack
      fontFamily={`"Quicksand", sans-serif`}
      bg={"#a39cf4"}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: "#a39cf4",
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props) => {
  const { children } = props;

  return (
    <Heading fontFamily={`"Quicksand", sans-serif`} as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = (props) => {
  const { children } = props;

  return (
    <Text
      fontFamily={`"Quicksand", sans-serif`}
      textAlign={"center"}
      color={"white"}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex
      fontFamily={`"Quicksand", sans-serif`}
      align={"center"}
      mt={8}
      direction={"column"}
    >
      <Avatar size={"xl"} src={src} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box fontFamily={`"Quicksand", sans-serif`}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontFamily={`"Quicksand", sans-serif`} color={"black"}>
            Our Clients Speak Not Us
          </Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Web Development</TestimonialHeading>
              <TestimonialText>
                Zura Technologies delivered exceptional web development
                services! Timely, professional, and tailored to my needs, with
                excellent design and communication. Highly recommended.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742284595/c2_goinxq.png"
              }
              name={"Anthony D'sa"}
              title={"Co-Founder at Losthorizoners"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>AR/VR Development</TestimonialHeading>
              <TestimonialText>
                We are very impressed with Zura Tech's work on VR project. They
                delivered quality within a short time, showcasing
                professionalism and efficiency. We look forward to working with
                them again.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742284596/c1_jmxfvr.jpg"
              }
              name={"Shashi Ranjan"}
              title={"Product Manager at Monkhub"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>UI/UX Development</TestimonialHeading>
              <TestimonialText>
                Our software’s UI was completely redesigned to be more
                user-friendly, visually appealing, and intuitive. The new design
                is sleek, highly functional, and easy to navigate. We’re
                extremely happy with the result!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742284586/c3_rgbfnu.jpg"
              }
              name={"Adrian Brown"}
              title={"Managing Director at Fennex Ltd"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
