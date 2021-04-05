import React, { useEffect } from "react";

import { Flex, Heading, Button, Link } from "@chakra-ui/react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

function Submit() {
  const history = useHistory();
  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          history.push("/");
        },
        function (error) {
          history.push("/");
        }
      );
  };
  useEffect(() =>
    firebase
      .auth()
      .onAuthStateChanged((user) =>
        user ? console.log("Signed In") : history.push("/signup")
      )
  );
  return (
    <Flex
      flexDirection="column"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading size="2xl" marginBottom="25px">
        Thanks for taking the time to type out a note to a business!
      </Heading>
      <Heading size="lg" marginBottom="25px">
        We'll make sure to forwards it to them during this pandemic
      </Heading>
      <Flex>
        <Link
          href="/dashboard"
          style={{ textDecoration: "none" }}
          marginRight="30px"
        >
          <Button
            colorScheme="teal"
            size="lg"
            style={{ textDecoration: "none" }}
          >
            Dashboard
          </Button>
        </Link>
        <Link
          href="/businesses"
          style={{ textDecoration: "none" }}
          marginRight="30px"
        >
          <Button colorScheme="teal" size="lg">
            Browse Businesses
          </Button>
        </Link>
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => logOut()}
          marginRight="30px"
        >
          Log Out
        </Button>
      </Flex>
    </Flex>
  );
}

export default Submit;
