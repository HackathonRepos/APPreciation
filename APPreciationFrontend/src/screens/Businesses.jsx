import React, { useState, useEffect } from "react";

import { stateList } from "../dummydata/stateList";
import stateCities from "state-cities";
import { capitalCase } from "capital-case";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

import {
  Flex,
  Heading,
  Button,
  Select,
  CloseButton,
  Link,
} from "@chakra-ui/react";
import BusinessCard from "../components/BusinessCard";
import BuisnessModal from "../components/BusinessModal";
import { mockData } from "../dummydata/mockData";
import axios from "axios";

function Businesses() {
  const [state, setGeoState] = useState("California");
  const [city, setCity] = useState("San Jose");
  const [disabled, setDisabled] = useState(false);
  const [businesses, setBusinesses] = useState(mockData["businesses"]);
  const history = useHistory();
  const submitBusinesses = () => {
    axios
      .get(
        `http://aydanpirani77.pythonanywhere.com/search_loc?query= |${city
          .split(" ")
          .join("+")}+${state}`
      )
      .then(({ data }) => {
        console.log(data["businesses"]);
        setBusinesses(data["businesses"]);
      })
      .catch((err) => console.log(err));
  };
  const cards = businesses.map((business, index) => (
    <BusinessCard
      businessName={business["name"]}
      pickup={business["transactions"]}
      imageUrl={business["image_url"]}
      address={business["location"]["display_address"].join(" ")}
      key={index}
    />
  ));
  // useEffect(() =>
  //   firebase
  //     .auth()
  //     .onAuthStateChanged((user) =>
  //       user ? console.log("Signed In") : history.push("/signup")
  //     )
  // );
  return (
    <Flex
      flexDirection="column"
      height="100%"
      minHeight="100vh"
      backgroundColor="gray.100"
    >
      <Flex p="20px">
        <Heading flex="2">View all businesses in the State of</Heading>
        <Select
          flex="1"
          placeholder={state}
          onChange={(evt) => setGeoState(evt.target.value, setDisabled(true))}
          size="lg"
          backgroundColor="teal.200"
          color="teal.900"
        >
          {stateList.map((geoState, index) => (
            <option value={geoState} key={index}>
              {geoState}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex p="20px">
        <Heading flex="2">And in the city of</Heading>
        <Select
          flex="1"
          placeholder={capitalCase(city)}
          size="lg"
          onChange={(evt) => setCity(evt.target.value, setDisabled(false))}
          backgroundColor="teal.200"
          color="teal.900"
        >
          {stateCities.getCities(state).map((cityItem, index) => (
            <option value={capitalCase(cityItem)} key={index}>
              {capitalCase(cityItem)}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex p="20px" justifyContent="flex-end" alignItems="center">
        <Link href="/dashboard">
          <CloseButton color="teal" marginRight="15px" w="40px" h="40px" />
        </Link>
        <Button
          colorScheme="teal"
          size="lg"
          disabled={disabled}
          onClick={() => submitBusinesses()}
        >
          {disabled ? "Select Another City" : "View Businesses"}
        </Button>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center">
        {cards}
      </Flex>
    </Flex>
  );
}

export default Businesses;
