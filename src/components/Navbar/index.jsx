import React from "react";
import {
  Avatar,
  Box,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
} from "@chakra-ui/react";
import { colors } from "../../utils/theme";

const Navbar = () => {
  return (
    <Box
      bgColor="white"
      p={{ base: "16px 24px", lg: "16px 80px" }}
      boxShadow="md"
    >
      <Grid
        templateColumns={{
          base: "1fr auto auto auto",
          md: "1fr 2fr auto auto auto",
          lg: "auto auto 1fr auto auto auto",
        }}
        alignItems="center"
        gap="8px"
      >
        {/* LOGO */}
        <GridItem display="flex" alignItems="center">
          <Image
            src="https://static.opensea.io/Logos/opensea-pride.svg"
            w="40px"
            marginRight="8px"
          />
          <Text fontSize="1.4rem" fontWeight="bold">
            OpenSea
          </Text>
        </GridItem>

        {/* LINKS */}
        <GridItem display={{ base: "none", lg: "flex" }} p="0px 40px">
          <Link
            marginRight="24px"
            fontWeight="600"
            color="text.700"
            _hover={{ color: "blue.700", textDecoration: "none" }}
          >
            Discover
          </Link>
          <Link
            fontWeight="600"
            color="text.700"
            _hover={{ color: "blue.700", textDecoration: "none" }}
          >
            How it work
          </Link>
        </GridItem>

        {/* SEARCH */}
        <GridItem display={{ base: "none", md: "flex" }}>
          <InputGroup>
            <Input
              type="search"
              placeholder="Search..."
              _placeholder={{ color: colors.text[600] }}
              borderWidth="1px"
              borderColor="text.500"
              borderRadius="40px"
            />
            <InputRightElement>
              <i
                data-feather="search"
                style={{ width: "20px", stroke: colors.text[600] }}
              ></i>
            </InputRightElement>
          </InputGroup>
        </GridItem>

        {/* NOTIFICATIONS */}
        <GridItem>
          <IconButton
            size="md"
            backgroundColor="transparent"
            icon={
              <i
                style={{ width: "20px", stroke: colors.text[600] }}
                data-feather="bell"
              ></i>
            }
          />
        </GridItem>

        {/* UPLOAD */}
        <GridItem display={{ base: "none", md: "flex" }}>
          <Button
            borderRadius="40px"
            p="18px 32px"
            size="sm"
            color="white"
            bgGradient="linear(to-r, blue.500, blue.700)"
          >
            Upload
          </Button>
        </GridItem>

        {/* USER */}
        <GridItem>
          <Avatar
            name="User"
            src="https://bit.ly/dan-abramov"
            size={{ base: "sm", md: "md" }}
          />
        </GridItem>

        {/* MENU */}
        <GridItem display={{ base: "flex", md: "none" }}>
          <IconButton
            size="md"
            backgroundColor="transparent"
            icon={<i style={{ width: "20px" }} data-feather="menu"></i>}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Navbar;
