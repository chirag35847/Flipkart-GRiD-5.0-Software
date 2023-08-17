import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider,darkTheme } from "@rainbow-me/rainbowkit";
import { wagmiConfig, chains } from "./web3-services/wallet/";
import { WagmiConfig } from "wagmi";
import { UserContextProvider } from "./contexts/UserContextProvider";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider theme={{colorScheme:'dark'}}>
    <BrowserRouter>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
