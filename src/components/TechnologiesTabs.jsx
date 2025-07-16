import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaApple,
  FaAndroid,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaAws,
  FaShopify,
  FaWordpress,
  FaVuejs,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { RiReactjsFill, RiNextjsFill } from "react-icons/ri";
import {
  SiTypescript,
  SiKotlin,
  SiGooglecloud,
  SiAmazondynamodb,
  TbBrandReactNative,
  FaFlutter,
  DiSwift,
  DiMongodb,
  VscAzure,
} from "react-icons/all";

const tabData = {
  Mobile: [
    { icon: <FaApple />, label: "iOS" },
    { icon: <IoLogoAndroid />, label: "Android" },
    { icon: <TbBrandReactNative />, label: "React Native" },
    { icon: <FaFlutter />, label: "Flutter" },
    { icon: <DiSwift />, label: "Swift" },
    { icon: <SiKotlin />, label: "Kotlin" },
  ],
  Frontend: [
    { icon: <RiReactjsFill />, label: "ReactJs" },
    { icon: <RiNextjsFill />, label: "NextJs" },
    { icon: <FaVuejs />, label: "VueJs" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS3" },
  ],
  "Backend & DB": [
    { icon: <FaNodeJs />, label: "NodeJs" },
    { icon: <FaPython />, label: "Python" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <SiAmazondynamodb />, label: "DynamoDB" },
  ],
  CMS: [
    { icon: <FaWordpress />, label: "WordPress" },
    { icon: <FaShopify />, label: "Shopify" },
  ],
  DevOps: [
    { icon: <FaAws />, label: "AWS" },
    { icon: <SiGooglecloud />, label: "Google Cloud" },
    { icon: <VscAzure />, label: "Azure" },
  ],
};

const TechnologiesTabs = () => {
  const tabBg = useColorModeValue("#e6f0fa", "gray.700");
  const selectedBg = useColorModeValue("#5e90f1", "blue.500");
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box py={16}>
      <Text
        fontSize={{ base: "26px", md: "36px" }}
        fontWeight={600}
        mb={6}
        textAlign="center"
        color={textColor}
      >
        Technologies We Use
      </Text>
      <Tabs variant="soft-rounded" isFitted>
        <TabList
          overflowX="auto"
          whiteSpace="nowrap"
          gap={3}
          justifyContent={{ base: "start", md: "center" }}
          px={2}
          css={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {Object.keys(tabData).map((key) => (
            <Tab
              key={key}
              fontSize={{ base: "14px", md: "16px" }}
              bg={tabBg}
              _selected={{ bg: selectedBg, color: "white" }}
              border="1px solid gray"
            >
              {key}
            </Tab>
          ))}
        </TabList>

        <TabPanels mt={10}>
          {Object.values(tabData).map((techs, idx) => (
            <TabPanel key={idx}>
              <Box
                display="flex"
                flexWrap="wrap"
                gap="40px"
                justifyContent="center"
              >
                {techs.map(({ icon, label }, index) => (
                  <Box
                    key={index}
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    fontSize="14px"
                    color={textColor}
                  >
                    <Box fontSize="60px" color={selectedBg}>
                      {icon}
                    </Box>
                    {label}
                  </Box>
                ))}
              </Box>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default TechnologiesTabs;
