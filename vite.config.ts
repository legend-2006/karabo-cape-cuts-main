// @lovable.dev/vite-tanstack-config already includes the main app plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/karabo-cape-cuts-main/",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
