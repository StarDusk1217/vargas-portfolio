"use client";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
            {" "}
            <SocialButton
              label={"GitHub"}
              href={"https://github.com/StarDusk1217"}
            >
              {" "}
              <FaGithub />{" "}
            </SocialButton>{" "}
            <SocialButton
              label={"LinkedIn"}
              href={"https://linkedin.com/in/yourprofile"}
            >
              {" "}
              <FaLinkedin />{" "}
            </SocialButton>{" "}
            <SocialButton
              label={"Email"}
              href={"mailto:starmiguel17@gmail.com"}
            >
              {" "}
              <FaEnvelope />{" "}
            </SocialButton>{" "}
          </Stack>{" "}
        </Container>{" "}
      </Box>{" "}
    </Box>
  );
}
