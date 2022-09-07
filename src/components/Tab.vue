<script setup lang="ts">
import { inject, onUnmounted, reactive, toRef } from "vue";

const props = defineProps<{
  title: string;
}>();
const register = inject("tabs-register");

const tab = reactive({
  title: toRef(props, "title"),
});

const { active, unregister } = register(tab);

onUnmounted(unregister);
</script>

<template>
  <div v-if="active" class="tab">
    <slot />
  </div>
</template>

<style scoped></style>
