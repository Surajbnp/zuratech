import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FAQAccordion = ({ faqs }) => {
  return (
    <Box mt={8} textAlign={"start"}>
      <Text fontSize={"4xl"} fontWeight={600} color={"#a39cf4"}>
        Frequently Asked Questions
      </Text>
      <Box mt={4}>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              border={"2px solid #a39cf4"}
              borderRadius="md"
              mb={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#e5d1fa", color: "gray.800" }}
                >
                  <Box flex="1" textAlign="left" fontWeight="600">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="gray.800">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQAccordion;
