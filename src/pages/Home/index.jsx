import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import HotCollections from "./components/HotCollections";
import Earn from "./components/Earn";

const Home = () => {
  return (
    <Box m="0 auto" p={{ base: "0px 24px", md: "0px 40px" }} maxWidth="900px">
      <Hero />
      <Slider />
      <HotCollections />
      <Earn />
    </Box>
  );
};

export default Home;
