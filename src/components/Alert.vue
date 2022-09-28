<script setup lang="ts">
import { useAlertStore } from "@/stores/Alert";
const alert = useAlertStore();
defineProps<{
  closable?: boolean;
}>();
</script>
<template v-if="alert.items.length">
  <div
    v-for="item in alert?.items"
    :key="item.id"
    class="text-center w-4/5 md:w-1/4 pl-5 p-2 absolute top-10 right-2 sm:right-10 rounded-lg transition-all duration-300"
    :class="[
      closable
        ? `flex justify-between ${item?.color}`
        : `text-center ${item?.color}`,
    ]"
  >
    <div v-if="item.html" v-html="item.message" class></div>
    <template v-else
      ><p class="text-2xl flex justify-center items-center text-white blue">
        {{ item.message }}
      </p></template
    >
    <VueButton
      v-if="closable"
      @click="alert.remove(item.id)"
      class="self-end px-5 py-2 cursor-pointer hover:border hover:text-white hover:border-white transition-all duration-300 text-2xl"
      >x</VueButton
    >
  </div>
</template>

<style scoped>
p {
  line-height: 1;
}
</style>
