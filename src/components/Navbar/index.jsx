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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { colors } from "../../utils/theme";

const Navbar = () => {
  return (
    <Box
      as="header"
      width="100%"
      zIndex={200}
      boxShadow="md"
      bgColor="white"
      position="fixed"
      p={{ base: "16px 24px", lg: "16px 80px" }}
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
          <Link to="/">
            <Image
              src="https://static.opensea.io/Logos/opensea-pride.svg"
              w="40px"
              marginRight="8px"
            />
          </Link>
          <Link to="/">
            <Text fontSize="1.4rem" fontWeight="bold">
              OpenSea
            </Text>
          </Link>
        </GridItem>

        {/* LINKS */}
        <GridItem
          display={{ base: "none", lg: "flex" }}
          p="0px 40px"
          gap="16px"
        >
          <Text
            marginRight="24px"
            fontWeight="600"
            color="text.700"
            _hover={{
              cursor: "pointer",
              color: "blue.700",
              textDecoration: "none",
            }}
          >
            Explore
          </Text>
          <Text
            fontWeight="600"
            color="text.700"
            _hover={{
              cursor: "pointer",
              color: "blue.700",
              textDecoration: "none",
            }}
          >
            Rankings
          </Text>
        </GridItem>

        {/* SEARCH */}
        <GridItem display={{ base: "none", md: "flex" }}>
          <InputGroup>
            <Input
              type="search"
              placeholder="Search items, collections, and accounts"
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
            backgroundColor="transparent"
            borderRadius="40px"
            size="md"
            icon={
              <i
                style={{ width: "20px", stroke: colors.text[600] }}
                data-feather="bell"
              ></i>
            }
          />
        </GridItem>

        {/* CREATE */}
        <GridItem display={{ base: "none", md: "flex" }}>
          <Link to="/create">
            <Button
              size="sm"
              p="18px 32px"
              color="white"
              borderRadius="40px"
              bgGradient="linear(to-r, blue.500, blue.700)"
            >
              Create
            </Button>
          </Link>
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
