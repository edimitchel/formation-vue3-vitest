<template>
    <a class="reference" :href="link" :title="title" target="_blank" :text-xl="!$slots.default"
        :class="absolute ? 'absolute top-12 right-10' : `relative ${$slots.default ? '' : 'ml'}`">
        <slot /> <carbon-notebook-reference />
    </a>
</template>
<script setup lang="ts">
import { VUE_DOCS } from '../constants';

const props = withDefaults(defineProps<{ to: string; title?: string; absolute?: boolean }>(), {
    title: "Reference",
    absolute: false
});

const link = props.to.startsWith('https://') ? props.to : `${VUE_DOCS}${props.to}`

</script>
<style lang="scss" scoped>
a.reference {
    transition: all 200ms;

    &:hover {
        @apply: !text-vue inline-block;
    }

    a & {
        display: none;
    }
}
</style>