<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";
const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  split: {
    type: String,
    default: "1/2",
  },
});
const style = computed(() => handleBackground(props.image));

const splits = computed(() => {
  const s = props.split.split("/");
  return {
    span: Number(s[1]) - Number(s[0]),
    cols: Number(s[1]),
  };
});
</script>

<template>
  <div class="grid w-full h-full" :class="`grid-cols-${splits.cols}`">
    <div class="my-14 ml-14" :style="style"></div>
    <div
      class="slidev-layout default image-left w-full"
      :class="[props.class, { [`col-span-${splits.span}`]: splits.span > 0 }]"
    >
      <slot />
    </div>
  </div>
</template>
