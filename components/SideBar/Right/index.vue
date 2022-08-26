<template>
  <div class="flex flex-col">
    <!-- preview card : whats happenning-->
    <SideBarRightPreviewCard title="What's happening">
      <SideBarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
        :key="whatsHappening"
      >
        <div>
          <h2 class="font-bold text-gray-600 text-md">
            {{ whatsHappening.title }}
          </h2>
          <p class="font-normal text-gray-400 text-xs">
            {{ whatsHappening.count }}
          </p>
        </div>
      </SideBarRightPreviewCardItem>
    </SideBarRightPreviewCard>
    <!-- preview card : who to follow -->

    <SideBarRightPreviewCard title="Who to follow">
      <SideBarRightPreviewCardItem
        v-for="whoToFollow in whoToFollowItems"
        :key="whoToFollow"
      >
        <div class="flex flex-row space-x-4 justify-start items-center">
          <img
            class="w-8 h-8 rounded-full"
            :src="whoToFollow.image"
            :alt="whoToFollow.name"
          />
          <div class="flex flex-col">
            <h2 class="font-bold text-gray-600 text-md">
              {{ whoToFollow.name }}
            </h2>
            <p class="font-normal text-gray-400 text-xs">
              {{ whoToFollow.handle }}
            </p>
          </div>
        </div></SideBarRightPreviewCardItem
      >
    </SideBarRightPreviewCard>
  </div>
</template>
<script setup>
const whatsHappeningItems = ref([
  {
    title: "#SpaceX",
    count: "18.8k tweets",
  },
  {
    title: "#Codingisfun",
    count: "8.8k tweets",
  },
  {
    title: "#RetailLink",
    count: "1.8k tweets",
  },
]);
const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/200",
  },
]);
</script>
