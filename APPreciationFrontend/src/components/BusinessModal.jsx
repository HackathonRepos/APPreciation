import React from "react";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Flex,
  Heading,
  Link,
  Divider,
  useToast,
} from "@chakra-ui/react";

function BusinessModal(props) {
  const toast = useToast();
  const saveBusiness = () => {
    let db = firebase.firestore();

    let user_id = firebase.auth().currentUser.uid;
    let business_id = uuidv4();

    let users = db.collection("users").doc(user_id);
    let businesses = db.collection("restaurants").doc(business_id);

    users
      .get()
      .then((data) => {
        var user_data = data.data();
        user_data["restaurants"].push(business_id);
        user_data["restaurants"] = [...new Set(user_data["restaurants"])];
        users
          .set(user_data)
          .then(console.log("users db update worked!"))
          .catch((e) => {
            console.log("error in users db update: " + e);
          });

        businesses
          .set({
            name: props.businessName,
            rating: props.rating,
            price: props.price,
            open: props.open,
            reviews: props.reviews,
            number: props.number,
            address: props.address,
            url: props.url,
          })
          .then(console.log("businesses db update worked!"))
          .catch((e) => {
            console.log("error in businesses db update: " + e);
          });
      })
      .catch((e) => {
        console.log("error in user db get: " + e);
      });
  };
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        size="4xl"
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.businessName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center">
              <Image src={props.imageUrl} w="400px" h="400px" />
              <Flex
                flexDirection="column"
                alignItems="center"
                marginLeft="30px"
              >
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Rating: {props.rating}/5
                </Heading>
                <Divider />
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Price: {props.price}
                </Heading>
                <Divider />
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Open: {props.open}
                </Heading>
                <Divider />
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Reviews: {props.reviews}
                </Heading>
                <Divider />
                <Heading size="md" marginBottom="15px" marginTop="15px">
                  Phone Number: {props.number}
                </Heading>
                <Divider />
                <Heading size="sm" marginBottom="15px" marginTop="15px">
                  Address: {props.address}
                </Heading>
                <Divider />
                <Flex marginTop="20px">
                  <Link
                    style={{ textDecoration: "none" }}
                    href={props.url}
                    isExternal
                  >
                    <Button colorScheme="teal" marginRight="15px">
                      Contribute to their Business
                    </Button>
                  </Link>
                  <Link
                    href={`/noteform/${props.businessName
                      .replace(/\s/g, "-")
                      .toLowerCase()}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button colorScheme="pink">Send a Note</Button>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                toast({
                  title: "Business Saved in Dashboard",
                  description:
                    "Please check your dashboard to check out your saved businesses",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                saveBusiness();
              }}
            >
              Save Business
            </Button>
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close X
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BusinessModal;
