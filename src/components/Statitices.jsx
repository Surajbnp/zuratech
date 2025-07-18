"use client";

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { FaGamepad, FaTelegram } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { IoLogoAndroid } from "react-icons/io5";
import { FaVrCardboard } from "react-icons/fa";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Statitices() {
  return (
    <Box
      w={"100%"}
      py={12}
      h={"80vh"}
      p={8}
      display={"flex"}
      alignItems={"center"}
    >
      <SimpleGrid w={"100%"} columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4} textAlign={"start"}>
          <Heading>A digital Product design agency</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon
                  as={HiOutlineHomeModern}
                  color={"yellow.500"}
                  w={5}
                  h={5}
                />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Architecture Development"}
            />
            <Feature
              icon={<Icon as={FaGamepad} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Game Development"}
            />
            <Feature
              icon={<Icon as={MdOutlineWeb} color={"purple.500"} w={5} h={5} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Web App Development"}
            />
            <Feature
              icon={<Icon as={IoLogoAndroid} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Android App Development"}
            />
            <Feature
              icon={<Icon as={FaVrCardboard} color={"red.500"} w={5} h={5} />}
              iconBg={useColorModeValue("red.100", "red.900")}
              text={"AR/VR Development"}
            />
            <Feature
              icon={<Icon as={FaTelegram} color={"blue.500"} w={5} h={5} />}
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={"TG Bot & Mini App Development"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
