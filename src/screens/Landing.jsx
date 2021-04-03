import React from "react";
import { Flex, Link, Center, Heading, Box, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Landing() {
  return (
    <Flex flexDirection="row" h="100vh">
      <Flex
        backgroundColor="teal.200"
        color="teal.900"
        flexDirection="column"
        flex="7"
      >
        <Flex flexDirection="row" justifyContent="space-between" m="10">
          <StarIcon w="10" h="10" />
          <Box>
            <Link href="/signup" m="5" p="5">
              Sign Up
            </Link>
            <Link href="/signin">Sign In</Link>
          </Box>
        </Flex>
        <Flex m="10">
          <Center>
            <Heading as="h1" size="2xl" w="600px">
              A Note and Donation for a Better Society
            </Heading>
          </Center>
        </Flex>
        <Flex flexDirection="row" m="10">
          <Button colorScheme="teal" size="lg">
            Try It Out
          </Button>
          <Button colorScheme="teal" size="lg">
            Existing User
          </Button>
        </Flex>
      </Flex>
      <Flex flex="5" className="Landing-Background"></Flex>
    </Flex>
  );
}

export default Landing;
