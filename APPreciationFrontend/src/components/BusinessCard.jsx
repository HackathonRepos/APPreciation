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
      p="15px"
      m="20px"
      boxShadow="2xl"
    >
      <Image src={props.imageUrl} w="35px" h="35px" />
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
      <Flex height="100%" alignItems="flex-end">
        <Button colorScheme="teal" size="lg" m="10px">
          Get Details
        </Button>
      </Flex>
    </Flex>
  );
}

export default BusinessCard;
