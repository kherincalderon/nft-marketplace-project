import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import Slider from "./components/Slider";

const Home = () => {
  return (
    <Box p={{ base: "0px 24px", lg: "0px 80px" }}>
      <Hero />
      <Slider />
    </Box>
  );
};

export default Home;
