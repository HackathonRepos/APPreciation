import React from "react";

import { Flex, Text, Heading, Button, Center, Link } from "@chakra-ui/react";
import { UnlockIcon } from "@chakra-ui/icons";
import firebase from "firebase";
import { useHistory } from "react-router";

function SignUp() {
  const history = useHistory();
  const signInWithGoogle = () => {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {
            console.log("Signed In");
            history.push("/businesses");
          })
          .catch((error) => {
            console.log(error);
            history.push("/");
          });
      })
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  };
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
            <Heading size="4xl">Sign Up With Google</Heading>
            <Flex justifyContent="flex-end">
              <Text marginTop="40px">
                We're excited for you to try this out!
              </Text>
            </Flex>
            <Button
              colorScheme="teal"
              size="lg"
              marginTop="100px"
              onClick={() => signInWithGoogle()}
            >
              <UnlockIcon marginRight="30px" />
              Sign Up With Google
            </Button>
            <Link href="/signin" marginTop="25px">
              Do you already have an account?
            </Link>
          </Flex>
        </Center>
      </Flex>
      <Flex flex="1" className="Landing-Background" />
    </Flex>
  );
}

export default SignUp;
