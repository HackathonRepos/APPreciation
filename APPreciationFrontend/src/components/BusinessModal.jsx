import React from "react";
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
} from "@chakra-ui/react";

function BusinessModal(props) {
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
                  Address:
                  {props.address}
                </Heading>
                <Divider />
                <Flex marginTop="20px">
                  <Link
                    style={{ textDecoration: "none" }}
                    href="https://www.yelp.com/biz/falafels-drive-in-san-jose?adjust_creative=oAXFtXos6R7jgkEpPDSmQA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=oAXFtXos6R7jgkEpPDSmQA"
                  >
                    <Button colorScheme="teal" marginRight="15px">
                      Contribute to their Business
                    </Button>
                  </Link>
                  <Link
                    href={`/noteform/${"Gen Korean BBQ House"
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
            <Button colorScheme="blue" mr={3} onClick={props.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BusinessModal;
