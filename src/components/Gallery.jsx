import { Box, Image, useBreakpointValue, Button, Text } from "@chakra-ui/react";

const photos = [
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1752216327/Screenshot_2025-07-11_121453_yqybnz.png",
    width: 512,
    height: 288,
    alt: "Event poster",
    span: { col: 1, row: 1 },
  },
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1751615439/WhatsApp_Image_2025-07-04_at_12.30.04_cc74faa5_lw8c9f.jpg",
    width: 512,
    height: 400,
    alt: "Space tunnel",
    span: { col: 2, row: 1 },
  },
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743754093/Screenshot_2025-04-04_133726_skwbih.png",
    width: 512,
    height: 512,
    alt: "Sign-in page",
    span: { col: 1, row: 1 },
  },
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1752301607/WhatsApp_Image_2025-07-11_at_17.35.31_9387e6f5_urxzcf.jpg",
    width: 512,
    height: 288,
    alt: "Hack Run game",
    span: { col: 2, row: 2 },
  },
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1744862184/WhatsApp_Image_2025-04-17_at_09.17.05_8ef735b7_pylaa6.jpg",
    width: 512,
    height: 512,
    alt: "Space Sprint",
    span: { col: 1, row: 2 },
  },
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1743873666/Green-white-minimalist-simple-bubble-tea-promo-buy-1-get-1-instagram-post-21_hkputl.png",
    width: 512,
    height: 512,
    alt: "VR experience",
    span: { col: 1, row: 1 },
  },
  {
    src: "https://res.cloudinary.com/dddnxiqpq/image/upload/v1744862184/WhatsApp_Image_2025-04-17_at_09.17.05_8ef735b7_pylaa6.jpg",
    width: 512,
    height: 512,
    alt: "Cosmic view",
    span: { col: 2, row: 1 },
  },
];

function MyGallery() {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <Box
      display="grid"
      gridTemplateColumns={`repeat(${columns}, 1fr)`}
      gap={4}
      p={4}
      w="100%"
      h="100vh"
    >
      {photos.map((photo, index) => (
        <Box
          key={index}
          w="100%"
          h="auto"
          gridColumn={`span ${photo.span.col}`}
          gridRow={`span ${photo.span.row}`}
          overflow="hidden"
          borderRadius="md"
          boxShadow="md"
          transition="all 0.3s ease"
          _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            w="100%"
            h="100%"
            objectFit="cover"
            loading="lazy"
            fallbackSrc="https://via.placeholder.com/512x288?text=Loading..."
          />
        </Box>
      ))}
    </Box>
  );
}

export default MyGallery;
