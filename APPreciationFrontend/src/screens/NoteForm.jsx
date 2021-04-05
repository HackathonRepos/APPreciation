import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

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
  let url = window.location.href.split("/");
  let temp_recipient = url[url.length - 1].split("-");
  temp_recipient = temp_recipient
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");

  // console.log(firebase.auth().currentUser);

  const [sender, setSender] = useState("Sender");
  const [recipient] = useState(temp_recipient);
  const [message, setMessage] = useState("");

  function UpdateDBs(words) {
    var db = firebase.firestore();
    var user_id = firebase.auth().currentUser.uid;
    var note_id = uuidv4();
    var restaurant_id = temp_recipient;

    var user = db.collection("users").doc(user_id);
    var note = db.collection("notes").doc(note_id);

    user
      .get()
      .then((data) => {
        var user_data = data.data();
        user_data["recipients"].push(restaurant_id);
        user_data["recipients"] = [...new Set(user_data["recipients"])];
        user_data["recipients_sent"] = user_data["recipients"].length;
        user_data["notes_written"] = user_data["notes_written"] + 1;
        user_data["words_written"] = user_data["words_written"] + words;

        try {
          user
            .set(user_data)
            .then(console.log("users db update worked!"))
            .catch((e) => {
              console.log("error in users db update: " + e);
            });

          note
            .set({
              author: sender,
              message: message,
              recipient: restaurant_id,
              recipient_name: temp_recipient,
            })
            .then(console.log("notes db update worked!"))
            .catch((e) => {
              console.log("error in notes db update: " + e);
            });
          history.push("/submit");
        } catch (error) {
          console.log(error);
          history.push("/businesses");
        }
      })
      .catch((e) => {
        console.log("error in user db get: " + e);
      });

      // const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID;
      // const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
      // const client = require('twilio')(accountSid, authToken);
      
      // client.messages
      //   .create({
      //      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
      //      from: '+16507205984',
      //      to: <ADD BUSINESS NUMBER HERE>
      //    })
      //   .then(message => console.log(message.sid));      

  }
  const history = useHistory();
  useEffect(
    () =>
      firebase.auth().onAuthStateChanged((user) => {
        setSender(user.displayName);
        user ? console.log(user) : history.push("/signup");
      }),
    {}
  );
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
          Please fill out all the fields as they are necessary.
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
          <Button
            colorScheme="teal"
            size="lg"
            disabled={message.length === 0}
            onClick={() => UpdateDBs(message.split(" ").length)}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NoteForm;
