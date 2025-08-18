import React from "react";
import {
  Box,
  Flex,
  Text,
  ChakraProvider,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router"; // ✅ Import Next.js router

export default function Pagelayout({ children }) {
  const router = useRouter(); // ✅ initialize router

  // Define your nav items with labels + paths
  const navItems = [
    { label: "Portfolio", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Resume", path: "/resume" },
  ];

  return (
    <ChakraProvider>
      <Flex
        minH="100vh"
        bg="#FFFFFF"
        flexDirection="column"
        maxW="2000px"
        w="100%"
        mx="auto"
        overflowX="hidden"
      >
        {/* HEADER / NAVBAR */}
        <Box
          h="10vh"
          w="100%"
          bg="#2f3030"
          color="white"
          position="relative"
          zIndex={10}
        >
          <HStack
            h="100%"
            px={250}
            justifyContent="space-between"
            alignItems="center"
          >
            <Text
              fontSize="lg"
              fontWeight="medium"
              cursor="pointer"
              onClick={() => router.push("/")} // Click logo → go home
            >
              Allen Vargas
            </Text>

            {/* Desktop Navigation */}
            <HStack spacing={6} textAlign="center">
              {navItems.map((item, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  fontWeight="medium"
                  cursor="pointer"
                  _hover={{ color: "#1E90FF" }}
                  onClick={() => router.push(item.path)} // ✅ Navigate on click
                >
                  {item.label}
                </Text>
              ))}
            </HStack>
          </HStack>
        </Box>

        {/* MAIN CONTENT AREA */}
        <VStack
          width="100%"
          bg="#FFFFFF"
          flex="1"
          mt={5}
          align="stretch"
          spacing={0}
          mx="auto"
        >
          {children}
        </VStack>
      </Flex>
    </ChakraProvider>
  );
}
