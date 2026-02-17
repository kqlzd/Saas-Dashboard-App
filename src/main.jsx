import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter } from "react-router-dom";
import { initMockAuth } from "./data/mockAuth";
import { ThemeProvider } from "./context/ThemeContext";

initMockAuth();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <ThemeProvider>
          <App />
          <Toaster />
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
);
