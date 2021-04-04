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
      <Heading>{props.businessName}</Heading>
      <Divider />
      <Text marginTop="10px">{props.address}</Text>
      <Text marginTop="10px">
        {props.pickup.length > 0 ? "How to purchase:" : null}
      </Text>
      <UnorderedList>
        {props.pickup.map((method, index) => (
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
