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
      border={"1px solid #4A6CF7"}
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
    <Box maxW="1300px" mx={"auto"}>
      <chakra.h1
        textAlign={textAlign}
        fontSize={{ base: "26px", md: "36px" }}
        fontWeight={600}
        color={color}
      >
        Why Choose Us ?
      </chakra.h1>
      <SimpleGrid
        mt={8}
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
              trigger="hover"
              colors="primary:#4A6CF7,secondary:#4A6CF7"
              style={{ width: "70px", height: '70px'} }
            ></lord-icon>
          }
        />
        <StatsCard
          title={"Happy Clients"}
          stat={"100+"}
          icon={
            <lord-icon
              src="https://cdn.lordicon.com/xjkryxnf.json"
              trigger="hover"
              colors="primary:#4A6CF7,secondary:#4A6CF7"
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
              trigger="hover"
              colors="primary:#4A6CF7,secondary:#4A6CF7"
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
              trigger="hover"
              colors="primary:#4A6CF7,secondary:#4A6CF7"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          }
        />
      </SimpleGrid>
    </Box>
  );
}
