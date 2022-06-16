import React, { useState } from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import BlockchainSelect, { blockchains } from "./components/BlockchainSelect";
import MarketOptions, { marketOptions } from "./components/MarketOptions";
import UploadFile from "./components/UploadFile";

const CreateNFT = ({ title }) => {
  const [blockchain, setBlockchain] = useState("eth");
  const [market, setMarket] = useState(marketOptions);

  const handleSwitchMarket = (e) => {
    setMarket((prevMarket) => ({ ...prevMarket, isChecked: e.target.checked }));
  };

  const handleMarketType = (key) => () => {
    setMarket((prevMarket) => ({ ...prevMarket, type: key }));
  };

  const handleChange = (key) => () => {
    setBlockchain(key);
  };
  return (
    <Box
      m={{ base: "0", md: "0 auto" }}
      p={{ base: "0", md: "0px 40px" }}
      maxWidth="800px"
    >
      <Stack w="100%">
        <Stack w={{ base: "100%", md: "70%" }} spacing="40px">
          {/* TITLE SECTION */}
          <Stack spacing="4px">
            <Text fontSize="4xl" fontWeight="700" color="text.700">
              Create New NFT
            </Text>
            <Text fontSize="md" fontWeight="600" color="gray.500">
              {title} edition on {blockchains[blockchain].name}
            </Text>
          </Stack>

          {/* BLOCKCHAIN SELECT */}
          <BlockchainSelect
            blockchain={blockchain}
            handleChange={handleChange}
          />

          {/* UPLOAD FILE */}
          <UploadFile />

          {/* MARKETPLACE OPTIONS */}
          <MarketOptions
            market={market}
            handleSwitchMarket={handleSwitchMarket}
            handleMarketType={handleMarketType}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateNFT;
