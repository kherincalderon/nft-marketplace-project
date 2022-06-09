import React from "react";
import {
  Center,
  Stack,
  Text,
  HStack,
  Image,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const HotCollections = () => {
  return (
    <Center>
      <Stack
        h="100%"
        w="100%"
        p="40px"
        minWidth="100"
        bgGradient="linear(to-r, blue.700, blue.500)"
        borderRadius="24px"
      >
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Hot collections
        </Text>
      </Stack>
    </Center>
  );
};

export default HotCollections;
