//import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// });
const config = {
  plugins: [vue()],
  publicDir: "dist",
};

export default config;
