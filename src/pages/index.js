import React from "react";
import Pagelayout from "@/components/Pagelayout";
import Footer from "@/components/Footer";
import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

function IndexPage() {
  return (
    <Pagelayout>
      {/* ===== HERO / INTRO SECTION ===== */}
      <Flex
        w="100%"
        h="100%"
        mx="auto"
        flexDirection={{ base: "column", md: "row" }}
        py={{ base: 10, md: 20 }}
        px={{ base: 4, sm: 8, md: 16, lg: 32 }}
        align="center"
        justify="space-evenly"
        gap={{ base: 8, md: 20 }}
      >
        {/* Text Section */}
        <VStack
          w={{ base: "100%", md: "60%", lg: "700px" }}
          align="flex-start"
          spacing={6}
          mb={{ base: 10, md: 0 }}
        >
          <Text
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontWeight="bold"
          >
            Hi, I&apos;m{" "}
            <Text as="span" color="#1E90FF">
              Allen Miguel L. Vargas
            </Text>
          </Text>

          <Text
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            fontWeight="medium"
            color="gray.700"
          >
            Aspiring Software Developer | Frontend & Backend Enthusiast
          </Text>

          <Text
            fontSize={{ base: "sm", sm: "md", md: "lg" }}
            lineHeight="1.8"
            textAlign="left"
            color="gray.600"
          >
            I&apos;m a recent Computer Science graduate beginning my journey as
            a software developer. During my internship, I focused on UI/UX and
            frontend development, while also gaining exposure to backend system
            design through ERDs, Use Case Diagrams, and DFDs.
            <br />
            <br />
            Through academic projects, I&apos;ve explored backend and full-stack
            development — including building a Car Pass and Parking Management
            System with computer vision integration and co-developing an
            e-commerce platform.
            <br />
            <br />I may just be starting my career, but I am eager to learn,
            adapt, and contribute by building scalable and user-friendly systems
            that make an impact.
          </Text>
        </VStack>

        {/* Image Section */}
        <Image
          src="/assets/vargas.jpg"
          alt="Allen Vargas"
          w={{ base: "200px", sm: "300px", md: "350px", lg: "400px" }}
          h={{ base: "200px", sm: "300px", md: "400px", lg: "500px" }}
          borderRadius="full"
          boxShadow="dark-lg"
        />
      </Flex>

      {/* ===== SKILLS SECTION ===== */}
      <Box
        w="100%"
        py={{ base: 10, md: 16 }}
        px={{ base: 4, sm: 8, md: 16, lg: 32 }} // ✅ match intro section padding
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="left"
          mb={10}
          color="#1E90FF"
        >
          Skills & Tools
        </Text>

        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }} // ✅ 1 column on small, 2 on md+
          spacing={{ base: 6, md: 8, lg: 10 }} // ✅ spacing adjusts by screen size
        >
          {/* Primary Skills */}
          <Box
            p={{ base: 4, sm: 5, md: 6 }} // ✅ padding adjusts by screen size
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            textAlign="left"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
            transition="all 0.3s ease"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              mb={3}
              color="gray.800"
            >
              Primary Skills
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.600"
              lineHeight="1.8"
            >
              JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB,
              Git, GitHub, Trello, Figma, VS Code, Database Management
            </Text>
          </Box>

          {/* Secondary Skills */}
          <Box
            p={{ base: 4, sm: 5, md: 6 }}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            textAlign="left"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
            transition="all 0.3s ease"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              mb={3}
              color="gray.800"
            >
              Secondary Skills
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.600"
              lineHeight="1.8"
            >
              C#, Python, PHP, Visual Studio, Android Studio, PyCharm, Flutter,
              MSSQL, MySQL, ASP.NET, .NET Core, Postman, Microsoft Office
              (Excel, PowerPoint), System Design (ERD, Use Case Diagrams,
              Flowcharts, DFD)
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Pagelayout>
  );
}

export default IndexPage;
