import {
  Box,
  Text,
  useColorModeValue,
  Image,
  SimpleGrid,
  Flex,
  Tooltip,
  useColorMode,
} from "@chakra-ui/react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { BsBriefcaseFill } from "react-icons/bs";

export default function TeamCard({ data }) {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.900");
  const tagColors = {
    developer: "#BFBDFF",
    marketer: "#FFEAAA",
    creator: "#FFBE9A",
    business: "#CEFFD0",
  };

  return (
    <Box maxW={"1300px"} m={"auto"} py={6} mt={"40px"}>
      <Text mb={8} fontSize={{ base: "26px", md: "36px" }} fontWeight={600}>
        Meet Our Experts
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {data &&
          data.map((project) => (
            <Box
              boxShadow="rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px"
              key={project.id}
              textAlign={"start"}
              maxW={"445px"}
              w={"full"}
              bg={bgColor}
              overflow={"hidden"}
            >
              <Box h={"fit-content"} pos={"relative"}>
                <Box
                  bg={tagColors[project.tag] || "#ccc"}
                  h={"10vh"}
                  pos={"relative"}
                >
                  <Box
                    pos={"absolute"}
                    w={"120px"}
                    h={"120px"}
                    bg={"gray.100"}
                    borderRadius={"50%"}
                    overflow={"hidden"}
                    bottom={0}
                    top={8}
                    left={"50%"}
                    transform="translate(-50%, 0%)"
                    border={"2px solid #ffffff"}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                  </Box>
                </Box>
                <Box textAlign={"center"} mt={"80px"}>
                  <Text fontWeight={600} fontSize={"18px"}>
                    {project?.name}
                  </Text>
                  <Text fontSize={"12px"} color={"grey"}>
                    {project?.title}
                  </Text>
                </Box>
                {/* <Box p={4} textAlign={"center"}>
                  <Text fontSize={"12px"} fontWeight={800} color={colorMode === "dark" ? "#ffffff" : "grey"} textAlign={"justify"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus molestiae cum sequi consectetur adipisicing elit.
                    Doloribus molestiae cum sequi.
                  </Text>
                </Box> */}
                <Flex
                  align="center"
                  justify={"center"}
                  p={8}
                  gap={2}
                  w={"100%"}
                  h={"4vh"}
                >
                  <Tooltip hasArrow label="LinkedIn">
                    <a
                      href={project?.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TiSocialLinkedinCircular
                        color={colorMode === "dark" ? "#ffffff" : "#0b66c3"}
                        size={"40px"}
                      />
                    </a>
                  </Tooltip>
                  {project?.portfolioUrl ? (
                    <a
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: `2px solid ${
                          colorMode === "dark" ? "#ffffff" : "#0b66c3"
                        }`,
                      }}
                      href={project?.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsBriefcaseFill
                        color={colorMode === "dark" ? "#ffffff" : "#0b66c3"}
                      />
                    </a>
                  ) : null}
                </Flex>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
}
