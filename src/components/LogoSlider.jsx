import { Box, Image, Flex } from "@chakra-ui/react";

const logos = [
  "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607553/client5_harpjr.png",
  "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607553/client1_vsswxc.png",
  "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607553/client6_asx9hj.png",
  "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607552/client2_oumibj.png",
  "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607552/client4_og9ui4.png",
  "https://res.cloudinary.com/dddnxiqpq/image/upload/v1741607552/client3_mjnnk6.png",
];

const LogoSlider = () => {
  const duplicatedLogos = [...logos, ...logos];
  return (
    <Box w="100%" overflow="hidden">
      <Flex
        className="logo-slider"
        direction="row"
        align="center"
        css={{
          display: "flex",
          animation: "slide 15s infinite linear",
          willChange: "transform",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <Box key={index} flex="0 0 auto" mx={5}>
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              boxSize="150px"
              objectFit="contain"
              bg="transparent"
              opacity={0.6}
            />
          </Box>
        ))}
      </Flex>
      <style jsx global>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              -50%
            ); /* Moves half the width for seamless loop */
          }
        }
      `}</style>
    </Box>
  );
};

export default LogoSlider;
