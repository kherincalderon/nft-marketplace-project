import React from "react";
import { Center, Stack, VStack, Text, Button, Image } from "@chakra-ui/react";

const Earn = () => {
  return (
    <Center>
      <Stack
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "20px", md: "80px" }}
      >
        <Stack spacing="8px" textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="xs" fontWeight="bold" color="gray.500">
            SAVE YOUR TIME WITH STACKS
          </Text>
          <Text fontSize="2xl" fontWeight="700" color="text.700">
            Earn free crypto with <br /> Cryptopedia
          </Text>
          <Text fontSize="sm" fontWeight="600" color="text.700">
            A educational platform that lead and inspire
          </Text>
          <Stack
            width="100%"
            spacing="16px"
            direction={["column", "row"]}
            p="24px 0px"
          >
            <Button
              width="100%"
              borderRadius="40px"
              bgGradient="linear(to-r, blue.500, blue.700)"
              color="white"
            >
              Earn now
            </Button>
            <Button
              width="100%"
              variant="outline"
              borderRadius="40px"
              borderWidth="2px"
              borderColor="gray.200"
            >
              Learn more
            </Button>
          </Stack>
        </Stack>
        <VStack>
          <Image
            src="https://assets-global.website-files.com/5f15b505dd58c1501a49d387/5f7444d4f6100624ce7929f4_download%20(7).png"
            maxHeight="232px"
            objectFit="cover"
            borderRadius="24px"
          />
        </VStack>
      </Stack>
    </Center>
  );
};

export default Earn;
