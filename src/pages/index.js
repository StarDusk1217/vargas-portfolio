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
            <VStack w="600px" align="flex-start" spacing={6}>
              <Text fontSize="4xl" fontWeight="bold" textAlign="left">
                Hi, I&apos;m{" "}
                <Text as="span" color="#1E90FF">
                  Allen Miguel L. Vargas
                </Text>
              </Text>
              <Text fontSize="lg" textAlign="left" lineHeight="1.8">
                Aspiring software developer with a solid computer science
                background and experience in backend development, databases, and
                machine learning. Skilled in multiple programming languages and
                frameworks. Passionate about building scalable, user-friendly
                systems and leading teams to deliver impactful solutions.
              </Text>

              {/* Skills Section */}
              <VStack w="100%" align="flex-start" spacing={6} maxW="600px">
                <Text fontSize="2xl" fontWeight="bold">
                  Languages / Tools / Frameworks
                </Text>

                {/* Primary Skills */}
                <Box>
                  <Text fontSize="xl" fontWeight="semibold" mb={3}>
                    Primary Skills
                  </Text>
                  <HStack wrap="wrap" spacing={3}>
                    {[
                      "JavaScript",
                      "HTML",
                      "CSS",
                      "React.js",
                      "Node.js",
                      "Express.js",
                      "MongoDB",
                      "Git",
                      "GitHub",
                      "Trello",
                      "Figma",
                      "VS Code",
                      "Database Management",
                    ].map((skill, i) => (
                      <Box
                        key={i}
                        px={3}
                        py={1}
                        borderRadius="md"
                        bg="#E6F0FF"
                        color="#1E90FF"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        {skill}
                      </Box>
                    ))}
                  </HStack>
                </Box>

                {/* Secondary Skills */}
                <Box>
                  <Text fontSize="xl" fontWeight="semibold" mb={3}>
                    Secondary Skills
                  </Text>
                  <HStack wrap="wrap" spacing={3}>
                    {[
                      "C#",
                      "Python",
                      "PHP",
                      "Visual Studio",
                      "Android Studio",
                      "PyCharm",
                      "Flutter",
                      "MSSQL",
                      "MySQL",
                      "ASP.NET",
                      ".NET Core",
                      "Postman",
                      "MS Office",
                      "System Design (ERD, Use Case, DFD, Flowcharts)",
                    ].map((skill, i) => (
                      <Box
                        key={i}
                        px={3}
                        py={1}
                        borderRadius="md"
                        bg="#F5F5F5"
                        color="#333"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        {skill}
                      </Box>
                    ))}
                  </HStack>
                </Box>
              </VStack>
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
