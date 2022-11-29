<template>
    <a :href="to" :title="title" target="_blank" absolute top-12 right-10 text-2xl>
        <carbon-notebook-reference />
    </a>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ to: string; title?: string }>(), {
    title: "Reference"
});
</script>
<style scoped lang="scss">
a {
    transition: all 200ms;

    &:hover {
        --at-apply: text-vue;
        transform: translate3d(2px, -2px, 0)
    }
}
</style>