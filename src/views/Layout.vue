<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
</script>
<template>
  <div class="flex flex-col sm:flex-row">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="flex-1">
      <RouterView v-slot="{ Component, route }">
        <transition :name="route.meta.transition || 'fade'" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>
<style scoped>
.grow-enter-from {
  opacity: 0;
  transform: scale3d(0.5, 0.4, -0.5);
  backface-visibility: hidden;
}
.grow-enter-active {
  transition: all 0.45s ease-in;
}
.grow-leave-to {
  opacity: 1;
  transform: scale3d(1, 1, 1);
}

.grow-leave-active {
  transition: 0.45s ease-out;
}
</style>
