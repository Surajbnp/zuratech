import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"2px solid #a39cf4"}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Statistics({ textAlign, color }) {
  return (
    <Box maxW="7xl" mx={"auto"}>
      <chakra.h1
        textAlign={textAlign}
        fontSize={"4xl"}
        py={8}
        fontWeight={"600"}
        color={color}
      >
        Why Choose Us ?
      </chakra.h1>
      <SimpleGrid
        columns={{ base: 1 }}
        spacing={{ base: 5, lg: 8 }}
        minChildWidth="250px"
        justifyContent="center"
      >
        <StatsCard
          title={"Finished Projects"}
          stat={"135+"}
          icon={
            <lord-icon
              src="https://cdn.lordicon.com/urhdeyyj.json"
              trigger="loop"
              colors="primary:#a39cf4,secondary:#e5d1fa"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          }
        />
        <StatsCard
          title={"Happy Clients"}
          stat={"100+"}
          icon={
            <lord-icon
              src="https://cdn.lordicon.com/xjkryxnf.json"
              trigger="loop"
              colors="primary:#a39cf4,secondary:#4bb3fd"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          }
        />
        <StatsCard
          title={"Skilled Experts"}
          stat={"30+"}
          icon={
            <lord-icon
              src="https://cdn.lordicon.com/uihwbzln.json"
              trigger="loop"
              colors="primary:#a39cf4,secondary:#a39cf4"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          }
        />
        <StatsCard
          title={"Honourable Awards"}
          stat={"10+"}
          icon={
            <lord-icon
              src="https://cdn.lordicon.com/wmqqbxlm.json"
              trigger="loop"
              colors="primary:#a39cf4,secondary:#a39cf4"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          }
        />
      </SimpleGrid>
    </Box>
  );
}
