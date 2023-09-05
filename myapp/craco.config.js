/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
  webpack: {
    alias: {
     "@features": path.resolve(__dirname, "./src/features/"),
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components/")
    },
  },
};