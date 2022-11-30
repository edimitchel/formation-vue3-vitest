<template>
    <a :href="link" :title="title" target="_blank" absolute top-12 right-10 text-xl>
        <carbon-notebook-reference />
    </a>
</template>
<script setup lang="ts">
import { VUE_DOCS } from '../constants';

const props = withDefaults(defineProps<{ to: string; title?: string }>(), {
    title: "Reference"
});

const link = props.to.startsWith('https://') ? props.to : `${VUE_DOCS}${props.to}`

</script>
<style scoped lang="scss">
a {
    transition: all 200ms;

    &:hover {
        @apply: !text-vue;
        transform: translate3d(2px, -2px, 0)
    }
}
</style>