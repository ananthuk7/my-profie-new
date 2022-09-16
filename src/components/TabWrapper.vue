<script setup lang="ts">
import { computed, provide, reactive, ref } from "vue";

const active = ref<string | null>(null);
const tabs = reactive<any[]>([]);

const activate = (tab: any) => {
  active.value = tab;
};
provide("tabs-register", (tab: any) => {
  tabs.push(tab);
  if (!active.value) {
    activate(tab);
  }
  return {
    active: computed(() => active.value === tab),
    unregister() {
      const index = tabs.indexOf(tab);
      tabs.splice(index, 1);

      if (active.value === tab) {
        activate(tabs[0]);
      }
    },
  };
});
</script>

<template>
  <div class="tabs">
    <div class="header">
      <VueButton
        v-for="tab in tabs"
        class="btn border border-zinc-900 transition-all duration-700"
        :class="{ active: tab === active }"
        @click="activate(tab)"
      >
        {{ tab.title }}
      </VueButton>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.active {
  background-color: rgb(24 24 27);
  color: #fff;
}
</style>
