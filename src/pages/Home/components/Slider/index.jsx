import React from "react";
import {
  Flex,
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
  Button,
} from "@chakra-ui/react";

const Slider = () => {
  return (
    <Container centerContent>
      {/* IMAGE */}
      <Stack direction={{ base: "column", md: "row" }}>
        <Image
          src="https://rndmcharacters-s3.s3.amazonaws.com/InvisibleFriends-roadmap/KITH_web.gif"
          width="300px"
          borderRadius="24px"
        />
        {/* INFO */}
        <VStack>
          <Text fontSize="4xl" fontWeight="600">
            Creator network
          </Text>
          <Grid templateColumns={{ base: "1fr 1fr" }}>
            <GridItem display="flex" alignItems="center">
              <Avatar name="User" src="https://bit.ly/code-beast" size="sm" />
              <Container>
                <Text fontSize="xs">Creator</Text>
                <Text>Jhon Smith</Text>
              </Container>
            </GridItem>

            <GridItem display="flex" alignItems="center">
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
              <Container>
                <Text fontSize="xs">Instant price</Text>
                <Text>8.5 ETH</Text>
              </Container>
            </GridItem>
          </Grid>
          <Box
            textAlign="center"
            borderWidth="2px"
            borderColor="gray.200"
            borderRadius="16px"
            width="300px"
            padding="16px"
            shadow="md"
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
          <Box padding="8px">
            <Button
              display="block"
              width="300px"
              marginBottom="8px"
              borderRadius="40px"
              bgGradient="linear(to-r, blue.500, blue.700)"
              color="white"
            >
              Place a bid
            </Button>
            <Button
              variant="outline"
              display="block"
              width="300px"
              borderRadius="40px"
              borderWidth="2px"
              borderColor="gray.200"
            >
              View item
            </Button>
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Slider;
