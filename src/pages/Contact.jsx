import React, { useState } from "react";
import styles from "../styles/home.module.css";
import {
  Box,
  Text,
  Flex,
  Button,
  useToast,
  Input,
  Textarea,
  Spinner,
  useColorMode,
  Image,
} from "@chakra-ui/react";

const Contact = () => {
  const toast = useToast();
  const [email, setMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { colorMode } = useColorMode();

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = {
      name,
      email,
      message,
      access_key: "f0582280-61e4-44a7-9e0e-8248818fb416",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Thanks for contacting us!",
          description: "Our team will reach out to you shortly!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setMail("");
        setName("");
        setMessage("");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box m={"140px auto"} maxW="1300px">
      <Box className={styles.contact} w={"100%"} py={4}>
        <Box
          bg={colorMode === "dark" ? "#121723" : "#ffffff"}
          m={"auto"}
          w={{ base: "100%", md: "80%" }}
        >
          <Text fontSize={"34px"} fontWeight={600}>
            Need help? Email us
          </Text>
          <Text color={"grey"}>
            Our support team will get back to you ASAP via email.
          </Text>
          <form onSubmit={onFormSubmit}>
            <Flex mt={8} gap={4} flexDir={{ base: "column", md: "row" }}>
              <Box flex={1}>
                <label>Your Name</label>
                <Input
                  borderRadius={"none"}
                  h={"6vh"}
                  mt={2}
                  type="text"
                  placeholder="Enter name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box flex={1}>
                <label>Your Email</label>
                <Input
                  mt={2}
                  borderRadius={"none"}
                  h="6vh"
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setMail(e.target.value)}
                />
              </Box>
            </Flex>
            <Box mt={8}>
              <label>Your Message</label>
              <Textarea
                borderRadius={"none"}
                mt={2}
                placeholder="Enter your message"
                minH={"20vh"}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Box>
            <Box mt={8}>
              <Button
                bg={"#4A6CF7"}
                color="white"
                borderRadius={"none"}
                h={"60px"}
                w="100%"
                type="submit"
                _hover={{ bg: "#3854c8" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner size="md" color="white" /> : "Submit"}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>

      <Box mt={"60px"} className={styles.map}>
        <Text
          padding={"40px"}
          fontSize={{ base: "26px", md: "36px" }}
          fontWeight={600}
        >
          Visit Us
        </Text>
        <Flex
          w={"100%"}
          flexDir={{ base: "column-reverse", md: "row" }}
          height={"fit-content"}
          justifyContent={"center"}
          gap={0}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4210.617527030514!2d85.30638769770697!3d23.360923246197984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1878af91807%3A0xdb0c02e5be9a1fdf!2sH%2F45%20Harmu%20Housing%20Colony%2C%20Nizam%20Nagar%2C%20Hindpiri%2C%20near%20Kartik%20Oraon%20Chowk%2C%20Harmu%20Housing%20Colony%2C%20Nizam%20Nagar%2C%20HARMU%2C%20Ranchi%2C%20Jharkhand%20834001!5e0!3m2!1sen!2sin!4v1752049162130!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <Box>
            <Image
              w={"100%"}
              h={450}
              src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1752049307/WhatsApp_Image_2025-07-09_at_13.50.48_0a6f4b86_rua4on.jpg"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Contact;

// <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1364.4816849506556!2d85.30831661315102!3d23.33970006051151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x39f4e1b6e56982ef%3A0x5aba706d7ada7f7e!2sMECON%20Limited%2C%2088Q4%2B2VM%2C%20Doranda%20Main%20Road%2C%20Vivekanand%20Chowk%2C%20Shyamali%20Colony%2C%20Doranda%2C%20Ranchi%2C%20Jharkhand%20834002!3m2!1d23.3406843!2d85.3214825!4m3!3m2!1d23.3459665!2d85.3031413!5e0!3m2!1sen!2sin!4v1752043904011!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
