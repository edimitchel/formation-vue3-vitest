import { defineUnoSetup } from "@slidev/types";

export default defineUnoSetup(() => ({
  shortcuts: {
    "text-vue": "text-vue font-mono",
  },
  theme: {
    colors: {
      cap: "#0070ad",
      vue: "#41b883",
    },
  },
}));
