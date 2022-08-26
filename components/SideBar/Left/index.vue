<template>
  <div class="flex flex-col h-screen">
    <div
      class="p-2 my-2 hover:bg-blue-100 hover:rounded-full w-min"
      :class="defaultTransition"
    >
      <nuxt-link to="/">
        <div class="h-8 w-8">
          <LogoTwitter />
        </div>
      </nuxt-link>
    </div>

    <div class="mt-2 space-y-2">
      <SideBarLeftTab active>
        <template v-slot:icon><HomeIcon /></template>
        <template v-slot:name>Home</template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template v-slot:icon><HashtagIcon /></template>
        <template v-slot:name>Explore</template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template v-slot:icon><InboxIcon /></template>
        <template v-slot:name>Messages</template>
      </SideBarLeftTab>
    </div>
  </div>
</template>
<script setup>
import { HomeIcon } from "@heroicons/vue/solid/index.js";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
} from "@heroicons/vue/outline/index.js";
const defaultTransition = useTailwindConfig();
</script>
