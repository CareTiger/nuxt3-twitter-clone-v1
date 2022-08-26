<template>
  <div
    class="p-3 hover:bg-gray-100 cursor-pointer border-b"
    :class="wrapperClasses"
  >
    <slot></slot>
  </div>
</template>
<script setup>
const wrapperClasses = computed(() => {
  `${defaultTransition} ${twitterBorderColor}`;
});
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
</script>
