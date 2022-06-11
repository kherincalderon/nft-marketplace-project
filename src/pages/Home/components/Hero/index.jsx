import React from "react";
import { Button, Center, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <VStack p="50px 0px" spacing="16px" w="100%">
      {/* HEADING */}
      <Center>
        <Text
          fontSize={{ base: "md", md: "xl" }}
          lineHeight="1"
          color="gray.500"
          fontWeight="500"
        >
          Create, Explore and Sell Digital Art NFTs
        </Text>
      </Center>

      {/* SUBTITLE */}
      <Center w="100vw">
        <Text
          textAlign="center"
          fontSize={{ base: "2.2rem", md: "3rem" }}
          color="text.700"
          fontWeight="700"
          lineHeight="1"
          marginBottom="24px"
        >
          The new creative economy
        </Text>
      </Center>

      {/* CTA BUTTON */}
      <Center>
        <Button
          p="18px"
          variant="outline"
          borderWidth="2px"
          borderRadius="40px"
          borderColor="gray.200"
        >
          Start your search
        </Button>
      </Center>
    </VStack>
  );
};

export default Hero;
