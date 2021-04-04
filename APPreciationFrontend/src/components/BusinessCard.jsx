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

function BusinessCard(props) {
  return (
    <Flex
      flexDirection="column"
      w="300px"
      backgroundColor="white"
      borderRadius="20px"
      p="10px"
      m="20px"
      boxShadow="2xl"
    >
      <Image
        src="http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg"
        w="35px"
        h="35px"
      />
      <Heading>Business Name</Heading>
      <Divider />
      <Text marginTop="10px">1234 Mouse Lane, San Jose, CA</Text>
      <Text marginTop="10px">How to purchase:</Text>
      <UnorderedList>
        {["pickup", "delivery"].map((method, index) => (
          <ListItem key={index}>{method}</ListItem>
        ))}
      </UnorderedList>
      <Button colorScheme="teal" size="lg" m="10px">
        Get Details
      </Button>
    </Flex>
  );
}

export default BusinessCard;
