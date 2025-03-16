import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { queryClient } from "./app/query-client.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@kamann/auth";
import { RouterProvider } from "react-router";
import { router } from "./app/router.tsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Could not find root element");
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
);
