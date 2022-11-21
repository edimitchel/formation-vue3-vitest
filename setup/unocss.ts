import { defineUnoSetup } from "@slidev/types";

export default defineUnoSetup(() => ({
  shortcuts: {
    "vue-brand": "text-vue font-bold font-mono",
  },
  theme: {
    colors: {
      cap: "#0070ad",
      vue: "#41b883",
      "vue-alt": "#34495e",
    },
  },
}));
