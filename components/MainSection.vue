<template>
  <div class="border-x" :class="twitterBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md">
      <h2 class="text-xl font-bold text-gray-800">{{ props.title }}</h2>
    </div>
    <div
      v-if="props.loading"
      class="flex items-center justify-center border-b py-6"
      :class="twitterBorderColor"
    >
      <UISpinner />
    </div>
    <div v-else><slot></slot></div>
  </div>
</template>
<script setup>
import Spinner from "./UI/Spinner.vue";
const { twitterBorderColor } = useTailwindConfig();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
