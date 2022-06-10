import React from "react";
import { Center, Stack, Text, Box } from "@chakra-ui/react";
import Collections from "../../../../components/Collections";

const HotCollections = () => {
  return (
    <Center>
      <Stack
        h="100%"
        w="100%"
        minWidth="100vw"
        alignItems="center"
        bgGradient="linear(to-r, blue.700, blue.500)"
      >
        <Box
          w="100%"
          maxWidth="820px"
          p={{ base: "40px 24px", md: "40px", lg: "40px 0px" }}
        >
          {/* TITLE SECTION */}
          <Text
            fontSize="2rem"
            fontWeight="700"
            color="white"
            marginBottom="16px"
          >
            Hot collections
          </Text>

          {/* HOT COLLECTIONS COMPONENT */}
          <Collections />
        </Box>
      </Stack>
    </Center>
  );
};

export default HotCollections;
