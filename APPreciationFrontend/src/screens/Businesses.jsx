import React, { useState } from "react";

import { Flex, Text, Heading, Button, Select } from "@chakra-ui/react";
import { stateList } from "../components/stateList";
import stateCities from "state-cities";

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
          placeholder={city}
          size="lg"
          onChange={(evt) => setCity(evt.target.value, setDisabled(false))}
        >
          {stateCities.getCities(state).map((cityItem, index) => (
            <option value={cityItem} key={index}>
              {cityItem}
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
    </Flex>
  );
}

export default Businesses;
