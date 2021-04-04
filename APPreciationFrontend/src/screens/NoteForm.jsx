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
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Submit your appreciation/thank you note here!</Heading>
      <Text>Please fill out all the fields as they are necessary</Text>
      <Flex flexDirection="column">
        <FormLabel htmlFor="sender">Sender</FormLabel>
        <Input name="sender" value={sender} readOnly />
      </Flex>
      <Flex flexDirection="column">
        <FormLabel htmlFor="recipient">Recipient</FormLabel>
        <Input name="recipient" value={recipient} readOnly />
      </Flex>
      <Flex flexDirection="column">
        <FormLabel htmlFor="recipient">Message</FormLabel>
        <Textarea
          placeholder="Enter your note here"
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
        />
      </Flex>
      <Flex>
        <CloseButton size="lg" />
        <Button>Submit</Button>
      </Flex>
    </Flex>
  );
}

export default NoteForm;
