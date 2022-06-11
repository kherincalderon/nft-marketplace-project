import React from "react";
import { Box } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import Type from "./components/Type";

const Create = () => {
  return (
    <Box p={{ base: "16px 24px", lg: "16px 80px" }}>
      <TopBar />
      <Type />
    </Box>
  );
};

export default Create;
