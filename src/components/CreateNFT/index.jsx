import React, { useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import BlockchainSelect, { blockchains } from "./components/BlockchainSelect";

const CreateNFT = ({ title }) => {
  const [blockchain, setBlockchain] = useState("eth");

  const handleChange = (key) => () => {
    setBlockchain(key);
  };
  return (
    <Box
      m={{ base: "0", md: "0 auto" }}
      p={{ base: "0", md: "0px 40px" }}
      maxWidth="900px"
    >
      <Stack w="100%">
        <Stack w={{ base: "100%", md: "80%" }} spacing="40px">
          {/* TITLE SECTION */}
          <Stack spacing="4px">
            <Text fontSize="3xl" fontWeight="700" color="text.700">
              Create New NFT
            </Text>
            <Text fontSize="sm" fontWeight="600" color="gray.500">
              {title} edition on {blockchains[blockchain].name}
            </Text>
          </Stack>

          {/* BLOCKCHAIN SELECT */}
          <BlockchainSelect
            blockchain={blockchain}
            handleChange={handleChange}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateNFT;
