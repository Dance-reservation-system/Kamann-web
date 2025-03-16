import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@kamann/auth": path.resolve(__dirname, "./src/features/auth"),
      "@kamann/router": path.resolve(__dirname, "./src/features/router"),
    },
  },
  preview: {
    port: 3000,
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
});
