"use client";

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ data }) {
  const bgColor = useColorModeValue("white", "gray.900");
  const headingColor = useColorModeValue("gray.700", "white");
  const navigate = useNavigate();
  return (
    <Center maxW={"1300px"} m={"auto"} py={6}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {data &&
          data.map((project) => (
            <Box
              _hover={{ cursor: "pointer" }}
              boxShadow="rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px"
              key={project.id}
              textAlign={"start"}
              maxW={"445px"}
              w={"full"}
              bg={bgColor}
              p={6}
              overflow={"hidden"}
              onClick={() => navigate(`/projects/${project?.id}`)}
              position={"relative"}
            >
              <Box
                h={"210px"}
                bg={"gray.100"}
                mt={-6}
                mx={-6}
                mb={6}
                pos={"relative"}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
              </Box>
              <Stack>
                <Text
                  color={"white"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                  w={"80px"}
                  padding={2}
                  pos={"absolute"}
                  borderRadius={"25px"}
                  top={5}
                  right={5}
                  bg={"#5e90f1"}
                  textAlign={"center"}
                >
                  {project?.cat}
                </Text>
                <Heading
                  color={headingColor}
                  fontSize={"2xl"}
                  fontFamily={"body"}
                >
                  {project.title}
                </Heading>
                <Text color={"gray.500"}>{project.description}</Text>
              </Stack>
            </Box>
          ))}
      </SimpleGrid>
    </Center>
  );
}
