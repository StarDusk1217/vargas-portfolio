import React from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons"; // Chakra's hamburger icon
import { useRouter } from "next/router";

export default function Pagelayout({ children }) {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure(); // for drawer toggle

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Resume", path: "/resume" },
  ];

  return (
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
          px={{ base: 4, sm: 8, md: 16, lg: 32 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Logo */}
          <Text
            fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
            fontWeight="bold"
            fontFamily="monospace"
            cursor="pointer"
            display="inline-block"
            onClick={() => router.push("/")}
            _hover={{
              "& span.bracket": { color: "#1E90FF" },
              "& span.name": { textShadow: "0 0 8px #1E90FF" },
            }}
          >
            <Text as="span" className="bracket" color="gray.400">
              {"</"}
            </Text>
            <Text as="span" className="name" color="#1E90FF">
              Allen Vargas
            </Text>
            <Text as="span" className="bracket" color="gray.400">
              {">"}
            </Text>
          </Text>

          {/* Desktop Navigation */}
          <HStack
            spacing={{ base: 2, sm: 4, md: 6 }}
            display={{ base: "none", md: "flex" }} // only show at md+
          >
            {navItems.map((item, index) => (
              <Text
                key={index}
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="medium"
                cursor="pointer"
                _hover={{ color: "#1E90FF" }}
                onClick={() => router.push(item.path)}
              >
                {item.label}
              </Text>
            ))}
          </HStack>

          {/* Mobile/Tablet Hamburger Menu */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }} // show below 1024px
            onClick={onOpen}
            variant="outline"
            color="white"
            border="none"
            _hover={{ bg: "gray.700" }}
          />
        </HStack>
      </Box>

      {/* Drawer for mobile navigation */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#2f3030" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} mt={6} align="flex-start">
              {navItems.map((item, index) => (
                <Text
                  key={index}
                  fontSize="lg"
                  fontWeight="medium"
                  cursor="pointer"
                  _hover={{ color: "#1E90FF" }}
                  onClick={() => {
                    router.push(item.path);
                    onClose(); // close drawer after navigation
                  }}
                >
                  {item.label}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* MAIN CONTENT AREA */}
      <VStack
        width="100%"
        bg="#FFFFFF"
        flex="1"
        mt={5}
        align="stretch"
        spacing={0}
        mx="auto"
        px={{ base: 4, sm: 8, md: 16, lg: 32 }}
      >
        {children}
      </VStack>
    </Flex>
  );
}
