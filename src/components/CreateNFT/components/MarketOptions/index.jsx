import React from "react";
import { Switch, Stack, Text, Button, ButtonGroup } from "@chakra-ui/react";
import FixedPrice from "./components/FixedPrice";

export const marketOptions = {
  isChecked: true,
  type: "fixed",
};

const MarketOptions = ({ market, handleSwitchMarket, handleMarketType }) => {
  return (
    <Stack spacing="16px">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing="16px"
      >
        <Stack>
          <Text fontSize="lg" fontWeight="700">
            Put on marketplace
          </Text>
          <Text fontSize="sm" fontWeight="600" color="gray.500">
            {market.isChecked
              ? "Enter price to allow users instantly purchase your NFT"
              : "Put your new NFT on marketplace"}
          </Text>
        </Stack>
        <Switch
          colorScheme="gray"
          onChange={handleSwitchMarket}
          isChecked={market.isChecked}
        />
      </Stack>

      {market.isChecked && (
        <Stack direction="row">
          <ButtonGroup variant="outline" w="100%">
            <Button
              w="100%"
              h={{ base: "140px", md: "160px" }}
              p="0px 20px"
              borderRadius="16px"
              borderWidth="2px"
              _active={{ bg: "transparent", borderColor: "blue.500" }}
              isActive={market.type === "fixed"}
              onClick={handleMarketType("fixed")}
            >
              <Text verticalAlign="baseline" fontSize="sm">
                Fixed <br /> price
              </Text>
            </Button>
            <Button
              w="100%"
              h={{ base: "140px", md: "160px" }}
              p="0px 20px"
              borderRadius="16px"
              borderWidth="2px"
              _active={{ bg: "transparent", borderColor: "blue.500" }}
              isActive={market.type === "bids"}
              onClick={handleMarketType("bids")}
            >
              <Text fontSize="sm">
                Open for <br /> bids
              </Text>
            </Button>
            <Button
              w="100%"
              h={{ base: "140px", md: "160px" }}
              p="0px 20px"
              borderRadius="16px"
              borderWidth="2px"
              _active={{ bg: "transparent", borderColor: "blue.500" }}
              isActive={market.type === "timed"}
              onClick={handleMarketType("timed")}
            >
              <Text fontSize="sm">
                Timed <br /> auction
              </Text>
            </Button>
          </ButtonGroup>
        </Stack>
      )}
      {market.type === "fixed" && <FixedPrice />}
      {market.type === "bids" && <Text>Open for bids</Text>}
      {market.type === "timed" && <Text>Timed auction</Text>}
    </Stack>
  );
};

export default MarketOptions;
