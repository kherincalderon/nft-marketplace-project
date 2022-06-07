import { Container } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <Container p={{ sm: "0px 16px", lg: "0px 80px" }}>
      <Hero />
    </Container>
  );
};

export default Home;
