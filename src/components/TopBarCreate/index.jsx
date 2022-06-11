import React from "react";
import { Box, Button, Divider } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Box p="8px 0px" mt={{ base: "72px", md: "80px" }}>
      <Link to="/create">
        <Button
          size="sm"
          color="text.700"
          variant="outline"
          borderWidth="1px"
          borderRadius="40px"
          borderColor="gray.200"
          leftIcon={<ArrowBackIcon />}
        >
          Back to create
        </Button>
      </Link>
      <Divider m="24px 0px" borderColor="gray.200" />
    </Box>
  );
};

export default TopBar;
