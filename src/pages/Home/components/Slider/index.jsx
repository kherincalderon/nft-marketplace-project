import React from "react";
import {
  VStack,
  Image,
  Text,
  Stack,
  Container,
  Grid,
  GridItem,
  Avatar,
  IconButton,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";

const Slider = () => {
  return (
    <Center marginBottom="50px" w="100%">
      {/* IMAGE */}
      <Stack
        w="100%"
        spacing={{ base: "40px", lg: "80px" }}
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Image
          src="https://rndmcharacters-s3.s3.amazonaws.com/InvisibleFriends-roadmap/KITH_web.gif"
          height={{ base: "400px", md: "300px", lg: "400px" }}
          objectFit="cover"
          borderRadius="24px"
        />

        {/* CONTENT */}
        <VStack spacing="24px">
          <Text
            fontSize={{ base: "1.75rem", md: "2rem" }}
            lineHeight="1"
            fontWeight="700"
          >
            Creator network
          </Text>
          <Grid
            templateColumns={{ base: "1fr 1fr" }}
            alignItems="center"
            alignContent="center"
            gap="24px"
          >
            <GridItem display="flex" alignItems="center" minWidth="175px">
              <Avatar name="User" src="https://bit.ly/code-beast" size="sm" />
              <Container>
                <Text fontSize="xs">Creator</Text>
                <Text fontWeight="bold">Jhon Smith</Text>
              </Container>
            </GridItem>

            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <IconButton
                size="sm"
                bgGradient="linear(to-r, blue.500, blue.700)"
                borderRadius="40px"
                icon={
                  <i
                    style={{ width: "12px", color: "white" }}
                    data-feather="credit-card"
                  ></i>
                }
              />
              <Box marginLeft="16px">
                <Text fontSize="xs">Instant price</Text>
                <Text fontWeight="bold">8.5 ETH</Text>
              </Box>
            </GridItem>
          </Grid>
          <Box
            textAlign="center"
            borderWidth="2px"
            borderColor="gray.200"
            borderRadius="24px"
            width="100%"
            padding="16px"
            shadow="sm"
          >
            <Text fontSize="sm" fontWeight="bold" color="text.700">
              Current Bid
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="text.700">
              1.85 ETH
            </Text>
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="text.600"
              marginBottom="16px"
            >
              $ 3404.15
            </Text>
            <Text fontSize="xs" fontWeight="bold" color="text.700">
              Auction ending in
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="text.700">
              19 : 45 : 21
            </Text>
          </Box>

          {/* CTA BUTTONS */}
          <Stack width="100%" spacing="16px" direction={["column", "row"]}>
            <Button
              width="100%"
              borderRadius="40px"
              bgGradient="linear(to-r, blue.500, blue.700)"
              color="white"
            >
              Place a bid
            </Button>
            <Button
              variant="outline"
              width="100%"
              borderRadius="40px"
              borderWidth="2px"
              borderColor="gray.200"
            >
              View item
            </Button>
          </Stack>
        </VStack>
      </Stack>
    </Center>
  );
};

export default Slider;
