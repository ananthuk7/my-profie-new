<script setup lang="ts">
import BaseErrorMessage from "./BaseErrorMessage.vue";

defineProps<{
  modelValue: string | number;
  error: string;
}>();
defineEmits<{
  (e: "update:modelValue", val: string | number): void;
}>();
</script>
<template>
  <input
    v-bind="{ ...$attrs, onInput : $event => {$emit('update:modelValue', ($event.target as HTMLInputElement).value)}}"
    :value="modelValue"
    :class="{ 'border border-red-600': error }"
  />
  <BaseErrorMessage v-if="error">
    {{ error }}
  </BaseErrorMessage>
</template>

<style scoped></style>
