import React from "react";
import { Flex, Text, Heading, Button, Center } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";

function SignIn() {
  return (
    <Flex flexDirection="row" h="100vh">
      <Flex flex="1" className="Landing-Background" />
      <Flex
        flex="4"
        backgroundColor="teal.200"
        color="teal.900"
        justifyContent="center"
      >
        <Center>
          <Flex flexDirection="column" marginRight="15px" marginLeft="15px">
            <Heading size="4xl">Sign In With Google</Heading>
            <Flex justifyContent="flex-end">
              <Text marginTop="40px">Thanks for coming back again!</Text>
            </Flex>
            <Button colorScheme="teal" size="lg" marginTop="100px">
              <UnlockIcon marginRight="30px" />
              Sign In With Google
            </Button>
          </Flex>
        </Center>
      </Flex>
      <Flex flex="1" className="Landing-Background" />
    </Flex>
  );
}

export default SignIn;
