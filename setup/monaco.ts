import { defineMonacoSetup } from "@slidev/types";

export default defineMonacoSetup((monaco) => {

  return {
    theme: {
      dark: "vs-dark",
      light: "vs",
    },
  };
});
