"use client";

import {
  Box,
  Flex,
  Text,
  Stack,
  Divider,
  Image,
  useColorMode,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Anthony D'sa",
    title: "Co-Founder at Losthorizoners",
    img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742284595/c2_goinxq.png",
    review:
      "Zura Technologies delivered exceptional web development services! Timely, professional, and tailored to my needs, with excellent design and communication. Highly recommended.",
  },
  {
    name: "R. Joshi",
    title: "Managing Director at Festo India",
    img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743855884/1611808740577_v8iulk.jpg",
    review:
      "Every task was executed flawlessly with exceptional attention to detail. The results far exceeded our expectations, and the quality of work delivered was outstanding and highly appreciated!",
  },
  {
    name: "Adrian Brown",
    title: "Managing Director at Fennex Ltd",
    img: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1742284586/c3_rgbfnu.jpg",
    review:
      "Our software’s UI was completely redesigned to be more user-friendly, visually appealing, and intuitive. The new design is sleek, highly functional, and easy to navigate. We’re extremely happy with the result!",
  },
  {
    name: "Anastasia Krylova",
    title: "Product Director at Absolute Realty",
    img: "https://media.licdn.com/dms/image/v2/C4E03AQHzWXfPKOMlvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659807462838?e=1756944000&v=beta&t=YpKvog1SaIz_r7l9RNyDki9kpyOlaQGl8WqA_97zSpc",
    review:
      "The team developed an excellent website for Absolute Realty, which helped them strengthen their online presence and effectively showcase their services and real estate listings.",
  },
];

export default function Testimonials() {
  const { colorMode } = useColorMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const cardsPerView = useBreakpointValue(
    { base: 1, sm: 1, md: 2, lg: 3 },
    { fallback: 1 }
  );

  const totalCards = testimonials.length;
  const maxIndex = totalCards - cardsPerView;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0;
      return prev + 1;
    });
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return maxIndex;
      return prev - 1;
    });
  }, [maxIndex]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 4000);
    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  const handleMouseEnter = () => clearInterval(intervalRef.current);
  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  const getVisibleCards = useCallback(() => {
    const startIndex = currentIndex;
    return testimonials.slice(startIndex, startIndex + cardsPerView);
  }, [currentIndex, cardsPerView]);

  return (
    <Box
      fontFamily={`"Quicksand", sans-serif`}
      pos="relative"
      w="100%"
      px={{ base: 2, sm: 4, md: 6, lg: 8 }}
      py={{ base: 8, md: 12 }}
    >
      <Box maxW="1400px" mx="auto">
        <Stack spacing={6} textAlign="center" mb={{ base: 6, md: 10 }}>
          <Text
            fontSize={{ base: "26px", md: "36px" }}
            fontWeight="bold"
            lineHeight="tight"
          >
            Client Testimonials
          </Text>
          <Text
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            color={colorMode === "dark" ? "gray.300" : "gray.600"}
            px={{ base: 2, sm: 0 }}
          >
            We have been working with clients around the world
          </Text>
        </Stack>

        <Box
          position="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          px={{ base: 6, sm: 8, md: 12 }}
          textAlign={"start"}
        >
          <IconButton
            aria-label="Previous slide"
            icon={<FaArrowLeft />}
            onClick={prevSlide}
            position="absolute"
            top="50%"
            left={{ base: 0, sm: 2, md: 4 }}
            transform="translateY(-50%)"
            zIndex={2}
            colorScheme="gray"
            variant="solid"
            borderRadius="full"
            size={{ base: "sm", md: "md" }}
            bg={colorMode === "dark" ? "gray.700" : "white"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
            boxShadow="md"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Flex
                gap={{ base: 2, sm: 4, md: 6 }}
                justify="center"
                wrap="nowrap"
                direction="row"
              >
                {getVisibleCards().map((t, i) => (
                  <Box
                    key={`${t.name}-${i}`}
                    minW={0}
                    maxW={{ base: "100%", sm: "400px", md: "none" }}
                  >
                    <Box
                      bg={colorMode === "dark" ? "gray.800" : "white"}
                      p={{ base: 4, sm: 6, md: 8 }}
                      boxShadow="rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px"
                      h="380px"
                      transition="all 0.3s"
                      _hover={{
                        transform: "translateY(-8px)",
                        boxShadow: "xl",
                      }}
                    >
                      <Box>
                        <Flex align="center" gap={3} mt={6}>
                          <Image
                            w={{ base: "40px", sm: "50px", md: "60px" }}
                            h={{ base: "40px", sm: "50px", md: "60px" }}
                            borderRadius="full"
                            src={t.img}
                            alt={t.name}
                            objectFit="cover"
                          />
                          <Box>
                            <Text
                              fontWeight="semibold"
                              fontSize={{ base: "sm", md: "md" }}
                            >
                              {t.name}
                            </Text>
                            <Text
                              fontSize={{ base: "xs", sm: "sm" }}
                              color={
                                colorMode === "dark" ? "gray.400" : "gray.500"
                              }
                            >
                              {t.title}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>

                      <Divider
                        mt={8}
                        mb={8}
                        borderColor={
                          colorMode === "dark" ? "gray.600" : "gray.200"
                        }
                      />

                      <Text
                        fontSize={{ base: "sm", sm: "md", md: "md" }}
                        noOfLines={6}
                        mb={6}
                      >
                        {t.review}
                      </Text>
                      <Flex gap={1} mb={4}>
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} color="#fcd12a" size={16} />
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                ))}
              </Flex>
            </motion.div>
          </AnimatePresence>

          <IconButton
            aria-label="Next slide"
            icon={<FaArrowRight />}
            onClick={nextSlide}
            position="absolute"
            top="50%"
            right={{ base: 0, sm: 2, md: 4 }}
            transform="translateY(-50%)"
            zIndex={2}
            colorScheme="gray"
            variant="solid"
            borderRadius="full"
            size={{ base: "sm", md: "md" }}
            bg={colorMode === "dark" ? "gray.700" : "white"}
            _hover={{ bg: colorMode === "dark" ? "gray.600" : "gray.100" }}
            boxShadow="md"
          />
        </Box>
      </Box>
    </Box>
  );
}
