import React from "react";
import Pagelayout from "@/components/Pagelayout";
import {
  Box,
  Flex,
  Text,
  ChakraProvider,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";

function IndexPage() {
  return (
    <Pagelayout>
      <Flex w="100%" h="100%" mx="auto" flexDirection="row" py={20}>
        <Box w="90%" mx="auto" flexDirection="column" h="100%">
          <HStack
            w="100%"
            justify="space-evenly"
            align="center"
            spacing={20}
            px={10}
          >
            {/* Text Section */}
            <VStack w="700px" align="flex-start" spacing={6}>
              <Text fontSize="5xl" fontWeight="bold">
                Hi, I&apos;m{" "}
                <Text as="span" color="#1E90FF">
                  Allen Miguel L. Vargas
                </Text>
              </Text>

              <Text fontSize="xl" fontWeight="medium" color="gray.700">
                Aspiring Software Developer | Frontend & Backend Enthusiast
              </Text>

              <Text
                fontSize="lg"
                lineHeight="1.8"
                textAlign="left"
                color="gray.600"
              >
                I&apos;m a recent Computer Science graduate beginning my journey
                as a software developer. During my internship, I focused on
                UI/UX and frontend development, while also gaining exposure to
                backend system design through ERDs, Use Case Diagrams, and DFDs.
                <br />
                <br />
                Through academic projects, I&apos;ve explored backend and
                full-stack development — including building a Car Pass and
                Parking Management System with computer vision integration and
                co-developing an e-commerce platform.
                <br />
                <br />I may just be starting my career, but I am eager to learn,
                adapt, and contribute by building scalable and user-friendly
                systems that make an impact.
              </Text>
            </VStack>

            {/* Image Section */}
            <Image
              src="/assets/vargas.jpg"
              alt="Allen Vargas"
              w="400px"
              h="500px"
              borderRadius="full"
              boxShadow="dark-lg"
            />
          </HStack>
        </Box>
      </Flex>
    </Pagelayout>
  );
}

export default IndexPage;
