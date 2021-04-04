import React from "react";
import axios from "axios";

function GenerateRestaraunts() {
  var rest = [1, 2];
  console.log(process.env);
  // TODO: Hit Anant with a POST request
  return rest;
}

function Businesses() {
  var restaraunts = GenerateRestaraunts();
  console.log(restaraunts.length);
  return (
    <div>
      <p>Buisnesses</p>
    </div>
  );
}

export default Businesses;
