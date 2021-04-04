import React, { useState } from "react";

import { stateList } from "../dummydata/stateList";
import stateCities from "state-cities";
import { capitalCase } from "capital-case";

import { Flex, Heading, Button, Select } from "@chakra-ui/react";
import BusinessCard from "../components/BusinessCard";
import { mockData } from "../dummydata/mockData";

function Businesses() {
  const [state, setGeoState] = useState("California");
  const [city, setCity] = useState("Mountain View");
  const [disabled, setDisabled] = useState(false);
  const cards = mockData["businesses"].map((business, index) => (
    <BusinessCard
      businessName={business["name"]}
      pickup={business["transactions"]}
      imageUrl={business["image_url"]}
      address={
        business["location"]["address1"] +
        ", " +
        business["location"]["city"] +
        ", " +
        business["location"]["state"]
      }
    />
  ));
  return (
    <Flex flexDirection="column" height="100%" backgroundColor="gray.100">
      <Flex>
        <Heading>View all businesses in the State of</Heading>
        <Select
          flex="1"
          placeholder={state}
          onChange={(evt) => setGeoState(evt.target.value, setDisabled(true))}
          size="lg"
        >
          {stateList.map((geoState, index) => (
            <option value={geoState} key={index}>
              {geoState}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex>
        <Heading>And in the city of</Heading>
        <Select
          flex="1"
          placeholder={capitalCase(city)}
          size="lg"
          onChange={(evt) => setCity(evt.target.value, setDisabled(false))}
        >
          {stateCities.getCities(state).map((cityItem, index) => (
            <option value={capitalCase(cityItem)} key={index}>
              {capitalCase(cityItem)}
            </option>
          ))}
        </Select>
      </Flex>
      <Flex>
        <Button colorScheme="teal" size="lg" disabled={disabled}>
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
