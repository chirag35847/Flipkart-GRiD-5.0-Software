import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { wagmiConfig, chains } from "./web3-services/wallet/";
import { WagmiConfig } from "wagmi";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
          {" "}
          <App />
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
