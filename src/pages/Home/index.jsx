import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Earn from "./components/Earn";

const Home = () => {
  return (
    <Box p={{ base: "0px 24px", lg: "0px 80px" }} maxWidth="1000px" m="0 auto">
      <Hero />
      <Slider />
      <Earn />
    </Box>
  );
};

export default Home;
