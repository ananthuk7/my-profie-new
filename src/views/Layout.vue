<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
</script>
<template>
  <div class="flex flex-col sm:flex-row">
    <div class="sidebar fixed left-0 right-0 top-0 w-32 z-50">
      <Sidebar />
    </div>
    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
