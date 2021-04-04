import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import dotenv from "dotenv";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { auth } from "./firebase";

dotenv.config();

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
