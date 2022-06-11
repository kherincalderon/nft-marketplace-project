import React from "react";
import { Center, Stack, VStack, Text, Button, Image } from "@chakra-ui/react";

const Earn = () => {
  return (
    <Center>
      <Stack
        width="100%"
        marginTop="50px"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "20px", md: "40px" }}
      >
        {/* CONTENT */}
        <Stack spacing="8px" textAlign={{ base: "center", md: "left" }}>
          <Text fontSize="xs" fontWeight="bold" color="gray.500">
            SAVE YOUR TIME WITH STACKS
          </Text>
          <Text fontSize="2xl" fontWeight="700" color="text.700">
            Earn free crypto with <br /> Cryptopedia
          </Text>
          <Text fontSize="md" fontWeight="600" color="gray.700">
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
              color="white"
              borderRadius="40px"
              bgGradient="linear(to-r, blue.500, blue.700)"
            >
              Earn now
            </Button>
            <Button
              width="100%"
              variant="outline"
              borderWidth="2px"
              borderRadius="40px"
              borderColor="gray.200"
            >
              Learn more
            </Button>
          </Stack>
        </Stack>

        {/* IMAGE */}
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
