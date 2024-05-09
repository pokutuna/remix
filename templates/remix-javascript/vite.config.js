import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

installGlobals({ nativeFetch: true });

export default defineConfig({
  plugins: [remix()],
});
