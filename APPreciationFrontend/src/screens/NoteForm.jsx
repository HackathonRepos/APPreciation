import React, { useState } from "react";

import firebase from "firebase";
import { useForm } from "react-hook-form";
import {
  Flex,
  Text,
  Heading,
  Button,
  CloseButton,
  Center,
  Link,
  Input,
  Textarea,
  FormErrorMessage,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";

function NoteForm() {
  const [sender] = useState("Sender");
  const [recipient] = useState("Recipient");
  const [message, setMessage] = useState("");
  return (
    <Flex
      flexDirection="column"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
    >
      <Heading color="teal.600" marginBottom="10px">
        Submit your appreciation/thank you note here.
      </Heading>
      <Text color="teal.500" marginBottom="30px">
        Please fill out all the fields as they are necessary
      </Text>
      <Flex flexDirection="column">
        <FormLabel htmlFor="sender" color="teal.500">
          Sender
        </FormLabel>
        <Input
          name="sender"
          value={sender}
          readOnly
          color="teal.700"
          borderColor="teal.600"
          focusBorderColor="teal.700"
          backgroundColor="teal.50"
          fontWeight="bold"
        />
      </Flex>
      <Flex flexDirection="column">
        <FormLabel htmlFor="recipient" color="teal.500">
          Recipient
        </FormLabel>
        <Input
          name="recipient"
          value={recipient}
          readOnly
          color="teal.700"
          borderColor="teal.600"
          focusBorderColor="teal.700"
          backgroundColor="teal.50"
          fontWeight="bold"
        />
      </Flex>
      <Flex flexDirection="column">
        <FormLabel htmlFor="recipient" color="teal.500">
          Message
        </FormLabel>
        <Textarea
          placeholder="Enter your note here"
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
          color="teal.700"
          borderColor="teal.600"
          focusBorderColor="teal.700"
          backgroundColor="teal.50"
          fontWeight="bold"
        />
      </Flex>
      <Flex>
        <Link href="/businesses">
          <CloseButton size="lg" color="teal.300" />
        </Link>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Flex>
    </Flex>
  );
}

export default NoteForm;
