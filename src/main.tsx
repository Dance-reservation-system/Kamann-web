import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { queryClient } from "./app/query-client.ts";
import { QueryClientProvider } from "@tanstack/react-query";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Could not find root element");
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
