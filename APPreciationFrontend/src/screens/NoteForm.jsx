import React, { useState } from "react";

import {
  Flex,
  Text,
  Heading,
  Button,
  CloseButton,
  Link,
  Input,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

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
      <Flex
        flexDirection="column"
        maxWidth="1000px"
        marginLeft="100px"
        marginRight="100px"
      >
        <Link href="/businesses">
          <ArrowBackIcon
            h="40px"
            w="40px"
            marginBottom="50px"
            color="teal.300"
          />
        </Link>
        <Heading color="teal.600" marginBottom="10px">
          Submit your appreciation/thank you note here.
        </Heading>
        <Text color="teal.500" marginBottom="30px">
          Please fill out all the fields as they are necessary
        </Text>
        <Flex flexDirection="column" marginBottom="15px">
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
        <Flex flexDirection="column" marginBottom="15px">
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
        <Flex flexDirection="column" marginBottom="15px">
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
        <Flex justifyContent="flex-end" alignItems="center">
          <CloseButton
            size="lg"
            color="teal.300"
            marginRight="15px"
            onClick={() => setMessage("")}
          />
          <Button colorScheme="teal" size="lg" disabled={message.length === 0}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NoteForm;
