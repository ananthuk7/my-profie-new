<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
</script>
<template>
  <div class="flex flex-col sm:flex-row">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="flex-1">
      <RouterView />
    </div>
  </div>
</template>
<style scoped></style>
