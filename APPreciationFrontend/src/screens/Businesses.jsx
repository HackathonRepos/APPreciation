import React, { useState } from "react";

import axios from "axios";
import {
  Flex,
  Text,
  Heading,
  Button,
  Center,
  Link,
  Select,
} from "@chakra-ui/react";
import { stateList } from "../components/stateList";
import stateCities from "state-cities";

function GenerateRestaraunts() {
  var rest = [1, 2];
  // TODO: Hit Anant with a POST request
  return rest;
}

function Businesses() {
  const [state, setGeoState] = useState("California");
  const [city, setCity] = useState("Mountain View");
  return (
    <Flex flexDirection="column" height="100vh" backgroundColor="gray.100">
      <Flex>
        <Heading>View all businesses in the State of</Heading>
        <Select
          placeholder={state}
          onChange={(evt) => setGeoState(evt.target.value)}
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
        <Select placeholder={city} size="lg">
          {stateCities.getCities(state).map((cityItem, index) => (
            <option value={cityItem} key={index}>
              {cityItem}
            </option>
          ))}
        </Select>
      </Flex>
    </Flex>
  );
}

export default Businesses;
