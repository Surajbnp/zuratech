import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const ProjectPage = () => {
  const projects = [
    {
      id: 2,
      title: "Indian Railways",
      description:
        "Discover a treasure trove of success stories and insightful case studies that illuminate the journey of innovation and entrepreneurship.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/indianr_ym7znk.png",
      cat: "IT",
    },
    {
      id: 1,
      title: "Fennex",
      description:
        "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390974/fenexx_piedeq.png",
      cat: "Web",
    },
    {
      id: 3,
      title: "NHAI",
      description:
        "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390974/nhai_fpsbif.png",
      cat: "3D",
    },
    {
      id: 10,
      title: "Absolute Realty",
      description: `Absolut Real Estate features modern architectural solutions, thoughtfully designed functional spaces, and a well-arranged environment for comfortable living.`,
      image:
        "https://storage.yandexcloud.net/backend-content-absolute/media/c/adv/img/02_1440x900_64Q9w0I/ac223aa64f62659b25bcb248863f599c.webp",
      cat: "Real EST",
    },
    {
      id: 11,
      title: "Zuraverse",
      description: `Zuraverse empowers users through immersive experiences in gaming, blockchain, and virtual interactions.`,
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743873666/Green-white-minimalist-simple-bubble-tea-promo-buy-1-get-1-instagram-post-21_hkputl.png",
      cat: "WEB",
    },
    {
      id: 9,
      title: "Moti Infra",
      description: `We partnered with Modi Infraheights to lead their journey into digital transformation.
       From immersive 3D visualizations to seamless experience.`,
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743874554/16498dac-ec98-421e-8bf7-4e26eb40b2ec.png",
      cat: "3D",
    },
    {
      id: 8,
      title: "Med VR",
      description:
        "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390975/medvr_oqusdp.png",
      cat: "AR/VR",
    },
    {
      id: 6,
      title: "Aliya Construction",
      description:
        "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390975/aliyacons_yjikby.png",
      cat: "Real EST",
    },
    {
      id: 7,
      title: "Monkhub",
      description:
        "Follow the journey of MedTech innovations, a pioneering startup dedicated to revolutionizing the healthcare industry.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/monkhub_e9nifq.png",
      cat: "AR/VR",
    },
    {
      id: 4,
      title: "PrimeMatesBC",
      description:
        "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741780143/primem_wfqwl5.png",
      cat: "TG App",
    },
    {
      id: 5,
      title: "Radio Khanchi",
      description:
        "From groundbreaking startups to industry-disrupting strategies, dive into real-world examples that inspire, inform, and guide.",
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/radioranc_pheuju.png",
      cat: "IT",
    },
    {
      id: 12,
      title: "H.A.C.K Run",
      description: `Hack Run is an interactive tech-driven game where strategy meets speed.
      Players dive into missions, crack challenges, and race against time to earn rewards.`,
      image:
        "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743874340/e9bc6e80-72db-4321-a53e-91d34b35f56a.png",
      cat: "Game",
    },
  ];

  const catArr = [
    "All",
    "IT",
    "TG App",
    "Real EST",
    "Design",
    "WEB",
    "3D",
    "Video",
    "UI/UX",
    "Game",
    "Brand",
    "Identity",
  ];

  const [tabIndex, setTabIndex] = useState(0);

  const filteredProjects =
    catArr[tabIndex] === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.cat.toLowerCase() === catArr[tabIndex].toLowerCase()
        );

  return (
    <Box w={"100%"} m={"60px auto"}>
      <Box w="100%" h="fit-content" py={16}>
        <Box mt={8}>
          <Tabs
            variant="soft-rounded"
            onChange={(index) => setTabIndex(index)}
            index={tabIndex}
            isLazy
          >
            <TabList
              display="flex"
              alignItems="center"
              justifyContent={{ base: "start", md: "center" }}
              gap={4}
              overflowX="auto"
              whiteSpace="nowrap"
              css={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {catArr.map((cat, index) => (
                <Tab
                  key={index}
                  bg="#e6f0fa"
                  _selected={{ bg: "#5e90f1", color: "white" }}
                  border="1px solid grey"
                  _hover={{ border: "1px solid grey" }}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  {cat}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {catArr.map((cat, index) => (
                <TabPanel key={index} width="100%" minH="80vh" mt="40px">
                  <ProjectCard
                    data={
                      cat === "All"
                        ? projects
                        : projects.filter(
                            (project) =>
                              project.cat.toLowerCase() === cat.toLowerCase()
                          )
                    }
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;
