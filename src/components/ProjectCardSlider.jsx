import React, { useState, useEffect } from "react";
import "./project.css";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const projects = [
  {
    id: 1,
    title: "Monkhub",
    description:
      "Follow the journey of MedTech innovations, a pioneering startup dedicated to revolutionizing the healthcare industry.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/monkhub_e9nifq.png",
  },
  {
    id: 2,
    title: "Indian Railways",
    description:
      "Discover a treasure trove of success stories and insightful case studies that illuminate the journey of innovation and entrepreneurship.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/indianr_ym7znk.png",
  },
  {
    id: 3,
    title: "Radio Ranchi",
    description:
      "From groundbreaking startups to industry-disrupting strategies, dive into real-world examples that inspire, inform, and guide.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390976/radioranc_pheuju.png",
  },
  {
    id: 4,
    title: "Aliya Construction",
    description:
      "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390975/aliyacons_yjikby.png",
  },
  {
    id: 5,
    title: "Fennex",
    description:
      "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390974/fenexx_piedeq.png",
  },
  {
    id: 6,
    title: "Med VR",
    description:
      "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390975/medvr_oqusdp.png",
  },
  {
    id: 7,
    title: "NHAI",
    description:
      "Explore how entrepreneurial ventures are shaping the future with sustainable and innovative solutions.",
    image:
      "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742390974/nhai_fpsbif.png",
  },
];

const continuousProjects = [...projects, ...projects];

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(
    continuousProjects.length - 4
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % continuousProjects.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  const previousProject = continuousProjects[previousIndex];

  const handleSliderChange = (e) => {
    const newIndex = parseInt(e.target.value, 10);
    setPreviousIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) =>
      prev === 0 ? continuousProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setPreviousIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % continuousProjects.length);
  };

  return (
    <Box
    overflowX={'hidden'}
      bg={useColorModeValue("gray.100", "gray.700")}
      p={"20px"}
    >
      <Text textAlign={'end'} fontSize={"52px"}>
        Explore Our Projects
      </Text>
      <div className="project-showcase">
        <div className="main-card">
          <motion.div
            className="main-project-card"
            key={previousProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={previousProject.image} alt={previousProject.title} />
            <motion.div
              className="content-overlay"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Text fontSize={"22px"} fontWeight={600}>
                {previousProject.title}
              </Text>
              <Text>{previousProject.description}</Text>
            </motion.div>
          </motion.div>
        </div>

        <div className="carousel-container">
          <div
            className="carousel"
            style={{ transform: `translateX(-${currentIndex * (100 / 2.5)}%)` }}
          >
            {continuousProjects.map((project) => (
              <div
                key={project.id}
                className="carousel-card"
                onClick={() => handleCardClick(project)}
              >
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <button>→</button>
              </div>
            ))}
          </div>
          <Box textAlign={"start"} mt={"40px"}>
            <Text fontWeight={600} fontSize={"24px"}>
              Our Projects – Innovation at Its Best
            </Text>
            <Text>
              At Zuratech, we deliver fast, seamless, and scalable solutions
              tailored to your business needs. Our projects reflect cutting-edge
              technology, intuitive design, and flawless performance, ensuring
              an unmatched user experience. From concept to deployment, we focus
              on efficiency, reliability, and innovation, helping businesses
              automate, optimize, and scale effortlessly. Whether it's a dynamic
              web application, a powerful SaaS platform, or a custom-built
              solution, we bring ideas to life with precision and agility.
              Explore our projects and see how we turn vision into reality—fast,
              efficient, and future-ready. 🚀
            </Text>
            <Box mt={4}>
              <Button bg={"#a39cf4"} onClick={handlePrev}>
                ←
              </Button>
              <Button bg={"#a39cf4"} ml={4} onClick={handleNext}>
                →
              </Button>
            </Box>
          </Box>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="expanded-view"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-btn" onClick={handleClose}>
                ←
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Box>
  );
};

export default ProjectShowcase;
