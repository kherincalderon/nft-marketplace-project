import React from "react";
import { Box, Stack, VStack, Text, Image } from "@chakra-ui/react";

const Type = () => {
  return (
    <VStack spacing="40px">
      {/* HEADING */}
      <VStack>
        <Text fontWeight="700" fontSize={{ base: "1.8rem", md: "2rem" }}>
          Choose Type
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="600"
          color="gray.500"
          textAlign="center"
          maxWidth={{ base: "300px", md: "700px" }}
        >
          Choose “Single” if you want your collection to be one of a kind or
          “Multiple” if you want to sell one collectible multiple times
        </Text>
      </VStack>

      {/* TYPE OPTIONS */}
      <Stack
        gap="40px"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        {/* SINGLE OPTION */}
        <VStack
          alignItems="center"
          justifyContent="center"
          borderColor="gray.300"
          borderRadius="24px"
          borderWidth="2px"
          h="300px"
          w="300px"
          p="24px"
          _hover={{
            cursor: "pointer",
            borderColor: "blue.500",
          }}
        >
          <Image
            src="https://rarible.com/public/76cc69b5fe227546330c.png"
            height="100px"
          />
          <Text fontSize="xl" fontWeight="700">
            Single
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="600"
            textAlign="center"
          >
            If you want to highlight the uniqueness and individuality of your
            item
          </Text>
        </VStack>

        {/* MULTIPLE OPTION */}
        <VStack
          alignItems="center"
          justifyContent="center"
          borderColor="gray.300"
          borderRadius="24px"
          borderWidth="2px"
          h="300px"
          w="300px"
          p="24px"
          _hover={{
            cursor: "pointer",
            borderColor: "blue.500",
          }}
        >
          <Image
            src="https://rarible.com/public/610e4a1f9d1023afaf33.png"
            height="100px"
          />
          <Text fontSize="xl" fontWeight="700">
            Multiple
          </Text>
          <Text
            fontSize="sm"
            color="gray.500"
            fontWeight="600"
            textAlign="center"
          >
            If you want to share your NFT with a large number of community
            members
          </Text>
        </VStack>
      </Stack>

      {/* LEGAL WARNING */}
      <VStack>
        <Text
          fontSize="xs"
          color="gray.400"
          fontWeight="600"
          textAlign="center"
          maxWidth={{ base: "300px", md: "700px" }}
        >
          We don't own your private keys and cannot access your funds without
          your confirmation
        </Text>
      </VStack>
    </VStack>
  );
};

export default Type;
