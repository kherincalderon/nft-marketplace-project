import React from "react";
import { Box } from "@chakra-ui/react";
import TopBarCreate from "../../components/TopBarCreate";
import CreateNFT from "../../components/CreateNFT";

const Multiple = () => {
  return (
    <Box p={{ base: "16px 24px", lg: "16px 80px" }}>
      <TopBarCreate />
      <CreateNFT title="Multiple" />
    </Box>
  );
};

export default Multiple;
