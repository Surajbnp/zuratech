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
      <Text fontSize={"22px"} fontWeight={600}>
        Frequently Asked Questions
      </Text>
      <Box mt={4}>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              border={"1px solid #4A6CF7"}
              borderRadius="none"
              mb={4}
              p={4}
            >
              <h2>
                <AccordionButton
                  _expanded={{ bg: "#4A6CF7", color: "white" }}
                >
                  <Box flex="1" textAlign="left" fontWeight="600">
                    {faq.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} >
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

