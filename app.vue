<template>
  <div class="bg-white">
    <div class="min-h-full">
      <div
        class="grid grid-cols-12 mx-auto sm:px-6 lg: max-w-7xl lg:px-8 lg:gap-5"
      >
        <!--left sidebar-->
        <div class="hidden md:block xs-col-span-1 xl:col-span-2">
          <div class="sticky top-0"><SideBarLeft /></div>
        </div>

        <!--main-->
        <main class="col-span-12 md:col-span-8 xl:col-span-6">
          <router-view></router-view>
        </main>

        <!--right sidebar-->
        <div class="hidden md:block xs-col-span-4 md:col-span-3">
          <div class="sticky top-0"><SideBarRight /></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
