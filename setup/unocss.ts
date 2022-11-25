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
  safelist: [
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'col-span-2',
    'col-span-3'
  ]
}));
