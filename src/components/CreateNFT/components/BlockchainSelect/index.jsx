import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const blockchains = {
  eth: {
    name: "Ethereum",
    src: "https://raw.githubusercontent.com/rarible/public-assets/main/blockchains/ETHEREUM.svg",
  },
  matic: {
    name: "Polygon",
    src: "https://raw.githubusercontent.com/rarible/public-assets/main/blockchains/POLYGON.svg",
  },
};

const BlockchainSelect = ({ blockchain, handleChange }) => {
  return (
    <Stack spacing="8px">
      <Menu>
        <Text fontSize="lg" fontWeight="700">
          Blockchain
        </Text>
        <MenuButton
          as={Button}
          size="lg"
          textAlign="left"
          borderRadius="40px"
          rightIcon={<ChevronDownIcon />}
        >
          <Box display="flex" alignItems="center">
            <Image
              src={blockchains[blockchain].src}
              boxSize="1.5rem"
              alt="Ethereum"
              mr="4px"
            />
            <Text
              position="relative"
              fontWeight="500"
              fontSize="md"
              top="1px"
              left="8px"
            >
              {blockchains[blockchain].name}
            </Text>
          </Box>
        </MenuButton>
        <MenuList borderRadius="16px">
          <MenuItem borderRadius="2px" onClick={handleChange("eth")}>
            <Image
              src={blockchains["eth"].src}
              boxSize="1.5rem"
              alt="Ethereum"
              mr="12px"
            />
            <span>{blockchains["eth"].name}</span>
          </MenuItem>
          <MenuItem borderRadius="2px" onClick={handleChange("matic")}>
            <Image
              src={blockchains["matic"].src}
              boxSize="1.5rem"
              alt="Ethereum"
              mr="12px"
            />
            <span>{blockchains["matic"].name}</span>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};

export default BlockchainSelect;
