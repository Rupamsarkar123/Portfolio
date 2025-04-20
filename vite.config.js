import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    port: process.env.PORT || 5173,
    host: true,
    allowedHosts: ["portfolio-1-3b61.onrender.com"],
  },
});


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   css: {
//     modules: {
//       localsConvention: "camelCase",
//     },
//   },
// });
