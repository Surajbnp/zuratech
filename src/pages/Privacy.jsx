import { Box, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/privacy.module.css";

const Privacy = () => {
  return (
    <Box
      margin={"90px auto"}
      minH={"90vh"}
      maxW="1300px"
      px={4}
      className={styles.container}
    >
      <Text
        textAlign="center"
        fontSize={{ base: "26px", md: "36px" }}
        fontWeight={600}
      >
        Privacy Policy
      </Text>
      <Text textAlign="center" fontSize="16px" mt={2}>
        Effective Date: 1st March 2025
      </Text>

      <Box mt={4}>
        <Text>
          Welcome to Zura Technologies Private Limited (“we,” “our,” or “us”).
          Your privacy is of utmost importance to us. This Privacy Policy
          explains how we collect, use, share, and protect your personal
          information when you visit our website or use our services.
        </Text>

        <Text mt={6} fontWeight={600}>
          1. Information We Collect
        </Text>
        <Text mt={2}>
          We may collect the following types of information depending on the
          application or service:
        </Text>
        <ul >
          <li>
            <Text>
              <strong>Personal Identification Information:</strong> Name, email
              address, phone number, and other contact details when you register
              or contact us.
            </Text>
          </li>
          <li>
            <Text>
              <strong>Technical Data:</strong> IP address, browser type,
              operating system, and other similar information collected
              automatically.
            </Text>
          </li>
          <li>
            <Text>
              <strong>Usage Data:</strong> Information on how you interact with
              our website and services.
            </Text>
          </li>
          <li>
            <Text>
              <strong>Cookies and Tracking Technologies:</strong> We may use
              cookies to enhance your user experience. You can choose to disable
              cookies through your browser settings.
            </Text>
          </li>
        </ul>

        <Text mt={6} fontWeight={600}>
          2. How We Use Your Information
        </Text>
        <Text mt={2}>We use the collected information to:</Text>
        <ul>
          <li>Provide and maintain our services.</li>
          <li>Improve and personalize your experience.</li>
          <li>
            Communicate with you, including responding to your inquiries and
            providing customer support.
          </li>
          <li>Monitor and analyze usage trends to enhance our offerings.</li>
          <li>Comply with legal obligations and enforce our policies.</li>
        </ul>

        <Text mt={6} fontWeight={600}>
          3. Sharing Your Information
        </Text>
        <Text mt={2}>
          We do not sell or rent your personal information to third parties. We
          may share your information in the following scenarios:
        </Text>
        <ul>
          <li>
            <Text>
              <strong>With Service Providers:</strong> To perform services on
              our behalf (e.g., hosting and analytics).
            </Text>
          </li>
          <li>
            <Text>
              <strong>Legal Requirements:</strong> If required by law or to
              protect our rights.
            </Text>
          </li>
          <li>
            <Text>
              <strong>Business Transfers:</strong> In connection with a merger,
              sale, or acquisition.
            </Text>
          </li>
        </ul>

        <Text mt={6} fontWeight={600}>
          4. Data Security
        </Text>
        <Text mt={2}>
          We implement appropriate security measures to protect your information
          from unauthorized access, alteration, or disclosure. However, no
          internet transmission is completely secure.
        </Text>

        <Text mt={6} fontWeight={600}>
          5. Your Data Rights
        </Text>
        <Text mt={2}>
          Depending on your jurisdiction, you may have rights regarding your
          personal data, including access, correction, deletion, and data
          portability. To exercise your rights, please contact us at{" "}
          <a href="mailto:contact@zuratech.com">contact@zuratech.com</a>.
        </Text>

        <Text mt={6} fontWeight={600}>
          6. Third-Party Links
        </Text>
        <Text mt={2}>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these external sites.
        </Text>

        <Text mt={6} fontWeight={600}>
          7. Changes to This Policy
        </Text>
        <Text mt={2}>
          We may update our Privacy Policy from time to time. Changes will be
          posted on this page, and the revised date will be indicated.
        </Text>

        <Text mt={6} fontWeight={600}>
          8. Contact Us
        </Text>
        <Text mt={2}>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </Text>
        <Text mt={2}>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@zuratech.com">contact@zuratech.com</a>
        </Text>
        <Text>
          <strong>Address:</strong> Zura Technologies Private Limited, Ranchi,
          India - 834002
        </Text>

        <Text mt={6}>
          By using our services, you consent to this Privacy Policy.
        </Text>
      </Box>
    </Box>
  );
};

export default Privacy;
