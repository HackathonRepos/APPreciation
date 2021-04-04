import React from "react";

import {
  Flex,
  Text,
  Heading,
  Button,
  Image,
  Divider,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function BusinessCard() {
  return (
    <Flex flexDirection="column">
      <Image
        src="http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg"
        w="30px"
        h="30px"
      />
      <Heading>Business Name</Heading>
      <Divider />
      <Text>1234 Mouse Lane, San Jose, CA</Text>
      <UnorderedList>
        <Text>How to purchase:</Text>
        {["pickup", "delivery"].map((method, index) => (
          <ListItem key={index}>{method}</ListItem>
        ))}
      </UnorderedList>
      <Button colorScheme="teal" size="lg">
        Get Details
      </Button>
    </Flex>
  );
}

export default BusinessCard;
