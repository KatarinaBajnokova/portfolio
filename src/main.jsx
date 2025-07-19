// ✅ src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "Nunito, sans-serif",
        headings: { fontFamily: "Playfair Display, serif" },
        colors: {
          brand: [
            "#fff0f5",
            "#ffe1eb",
            "#ffcddf",
            "#ffb1cf",
            "#fc90bc",
            "#f86aa7",
            "#ec3e8f",
            "#dc2679",
            "#bf1a6b",
            "#a20f59",
          ],
        },
        primaryColor: "brand",
        defaultRadius: "md",
      }}
    >
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
