import React from "react";
import { Switch, Stack, Text, Button, ButtonGroup } from "@chakra-ui/react";
import FixedPrice from "./components/FixedPrice";
import OpenBids from "./components/OpenBids";
import TimedAuction from "./components/TimedAuction";

export const marketOptions = {
  isChecked: true,
  type: "fixed",
};

const MarketOptions = ({ market, handleSwitchMarket, handleMarketType }) => {
  return (
    <Stack spacing="16px">
      <Stack
        spacing="16px"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
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
        <>
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
                width="100%"
                padding="0px 20px"
                borderRadius="16px"
                borderWidth="2px"
                isActive={market.type === "timed"}
                onClick={handleMarketType("timed")}
                height={{ base: "140px", md: "160px" }}
                _active={{ bg: "transparent", borderColor: "blue.500" }}
              >
                <Text fontSize="sm">
                  Timed <br /> auction
                </Text>
              </Button>
            </ButtonGroup>
          </Stack>
          {market.type === "fixed" && <FixedPrice />}
          {market.type === "bids" && <OpenBids />}
          {market.type === "timed" && <TimedAuction />}
        </>
      )}
    </Stack>
  );
};

export default MarketOptions;
