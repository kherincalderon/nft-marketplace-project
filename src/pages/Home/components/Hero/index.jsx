import React from "react";
import { Button, Center, Text, VStack } from "@chakra-ui/react";

const Hero = () => {
  return (
    <VStack p="50px 0px" spacing="16px" w="100%">
      {/* HEADING */}
      <Center>
        <Text fontSize="1rem" lineHeight="1" color="gray.500" fontWeight="500">
          Create, Explore and Sell Digital Art NFTs
        </Text>
      </Center>

      {/* SUBTITLE */}
      <Center w="100vw">
        <Text
          textAlign="center"
          fontSize={{ base: "2.5rem", md: "3rem" }}
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
          variant="outline"
          borderRadius="40px"
          borderColor="text.700"
          borderWidth="2px"
          p="18px"
        >
          Start your search
        </Button>
      </Center>
    </VStack>
  );
};

export default Hero;
