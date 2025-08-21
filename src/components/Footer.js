"use client";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Tooltip,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{ bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200") }}
    >
      {" "}
      <VisuallyHidden>{label}</VisuallyHidden> {children}{" "}
    </chakra.button>
  );
};
export default function Footer() {
  const router = useRouter();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        {" "}
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          {" "}
          <Text>
            {" "}
            © {new Date().getFullYear()} Allen Vargas. All rights reserved.{" "}
          </Text>{" "}
          <Stack direction={"row"} spacing={6}>
            <Tooltip label="github.com/StarDusk1217" hasArrow>
              <span>
                {" "}
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/StarDusk1217"}
                >
                  {" "}
                  <FaGithub />{" "}
                </SocialButton>{" "}
              </span>
            </Tooltip>
            <Tooltip label="linkedin.com/in/allen-miguel-vargas/" hasArrow>
              <span>
                <SocialButton
                  label={"LinkedIn"}
                  href={"https://www.linkedin.com/in/allen-miguel-vargas/"}
                >
                  {" "}
                  <FaLinkedin />{" "}
                </SocialButton>{" "}
              </span>
            </Tooltip>
            <Tooltip label="starmiguel17@gmail.com" hasArrow>
              <span>
                <SocialButton
                  label={"Email"}
                  href={"mailto:starmiguel17@gmail.com"}
                >
                  <FaEnvelope />
                </SocialButton>
              </span>
            </Tooltip>
            <Tooltip label="+63 945 456 4096" hasArrow>
              <span>
                <SocialButton label={"Phone"} href={"tel:+639123456789"}>
                  <FaPhone />
                </SocialButton>
              </span>
            </Tooltip>
          </Stack>{" "}
        </Container>{" "}
      </Box>{" "}
    </Box>
  );
}
