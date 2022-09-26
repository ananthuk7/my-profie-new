<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Alert from "@/components/Alert.vue";
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
      <Alert closable />
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
  transition: all 0.5s ease-in;
}
.grow-leave-to {
  opacity: 1;
  transform: scale3d(1, 1, 1);
}

.grow-leave-active {
  transition: 0.5s ease-out;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s ease-in;
}
.fade-leave-to {
  opacity: 1;
}

.fade-leave-active {
  transition: 0.5s ease-out;
}
</style>
