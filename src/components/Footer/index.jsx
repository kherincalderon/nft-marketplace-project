import React from "react";
import { Box, Flex, Text, Image, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      bgColor="gray.100"
      h={{ base: "50vh", md: "30vh" }}
      w="100vw"
      p="40px"
      marginTop="50px"
      justifyContent="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Stack spacing="16px">
        <Image
          src="https://static.opensea.io/Logos/opensea-pride.svg"
          w="40px"
        />
        <Text fontSize="xl" fontWeight="bold">
          The New Creative <br />
          Economy
        </Text>
      </Stack>
      <Stack>
        <Text>CRYPTER</Text>
        <Text>Discover</Text>
        <Text>Connect walltet</Text>
      </Stack>
      <Stack>
        <Text>INFO</Text>
        <Text>FAQ</Text>
        <Text>Create item</Text>
      </Stack>
    </Flex>
  );
};

export default Footer;
