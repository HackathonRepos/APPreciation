import React, { useState } from "react";

import { stateList } from "../dummydata/stateList";
import stateCities from "state-cities";
import { capitalCase } from "capital-case";

import { Flex, Text, Heading, Button, Select } from "@chakra-ui/react";
import BusinessCard from "../components/BusinessCard";

function Businesses() {
  const [state, setGeoState] = useState("California");
  const [city, setCity] = useState("Mountain View");
  const [disabled, setDisabled] = useState(false);

  return (
    <Flex flexDirection="column" height="100vh" backgroundColor="gray.100">
      <Flex>
        <Heading>View all businesses in the State of</Heading>
        <Select
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
        <Text>{state}</Text>
        <Text>{city}</Text>
        <Button colorScheme="teal" size="lg" disabled={disabled}>
          {disabled ? "Select Another City" : "View Businesses"}
        </Button>
      </Flex>
      <BusinessCard />
    </Flex>
  );
}

export default Businesses;
