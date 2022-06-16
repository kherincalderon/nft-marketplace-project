import React from "react";
import { Box, Stack, Text, Button } from "@chakra-ui/react";

const UploadFile = () => {
  return (
    <Stack spacing="16px">
      <Text fontSize="lg" fontWeight="700">
        Upload file
      </Text>
      <Stack
        spacing="16px"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        borderRadius="16px"
        border="2px dashed #cbd5e0"
        p="40px"
      >
        <Text textAlign="center" fontWeight="500" color="gray.500">
          PNG, GIF, SVG, MP4 or MP3. Max 100mb.
        </Text>
        <Button borderRadius="40px" p="0px 40px">
          Choose File
        </Button>
      </Stack>
    </Stack>
  );
};

export default UploadFile;
