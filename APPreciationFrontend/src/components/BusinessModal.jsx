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
  useDisclosure,
  Image,
  Flex,
  Heading,
  Link,
  Divider,
} from "@chakra-ui/react";

function BusinessModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        isOpen={true}
        onClose={onClose}
        size="4xl"
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Gen Korean BBQ House</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex alignItems="center">
              <Image
                src="https://s3-media1.fl.yelpcdn.com/bphoto/-g5mYPUvxsX7hfor95Iq-Q/o.jpg"
                w="400px"
                h="400px"
              />
              <Flex
                flexDirection="column"
                alignItems="center"
                marginLeft="30px"
              >
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Rating: 4.5/5
                </Heading>
                <Divider />
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Price: $$$
                </Heading>
                <Divider />
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Open: Yes
                </Heading>
                <Divider />
                <Heading size="lg" marginBottom="15px" marginTop="15px">
                  Reviews: 9999
                </Heading>
                <Divider />
                <Heading size="md" marginBottom="15px" marginTop="15px">
                  Phone Number: +14084772773
                </Heading>
                <Divider />
                <Heading size="sm" marginBottom="15px" marginTop="15px">
                  Address:
                  {["1628 Hostetter Rd", "Ste F", "San Jose, CA 95131"].join(
                    " "
                  )}
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
                      .replace(/\s/g, "")
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BusinessModal;
