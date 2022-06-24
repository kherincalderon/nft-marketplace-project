import React from "react";
import {
  Stack,
  Text,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const FixedPrice = () => {
  return (
    <Stack>
      <Text fontSize="md" fontWeight="700">
        Price
      </Text>
      <Stack direction="row" alignItems="center" spacing="0px">
        <Input
          p="24px"
          type="text"
          borderRadius="40px 0px 0px 40px"
          fontWeight="500"
          placeholder="Enter price for one piece"
        />
        <Menu>
          <MenuButton
            as={Button}
            p="24px 16px"
            borderWidth="1px"
            bgColor="transparent"
            borderRadius="0px 40px 40px 0px"
            rightIcon={<ChevronDownIcon />}
          >
            <Text fontSize="sm" marginRight="16px">
              ETH
            </Text>
          </MenuButton>
        </Menu>
      </Stack>
    </Stack>
  );
};

export default FixedPrice;
