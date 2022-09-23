<script setup lang="ts">
import BaseErrorMessage from "./BaseErrorMessage.vue";
const props = defineProps<{
  modelValue: string | number;
  cols?: number;
  rows?: number;
  error: string;
}>();
defineEmits<{
  (e: "update:modelValue", val: string | number): void;
}>();
</script>
<template>
  <textarea
    name=""
    id=""
    :cols="cols"
    :rows="rows"
    v-bind="{ ...$attrs, onInput : $event => {$emit('update:modelValue', ($event.target as HTMLInputElement).value)}}"
    :value="modelValue"
    :class="{ 'border border-red-600': error }"
  ></textarea>
  <BaseErrorMessage v-if="error">
    {{ error }}
  </BaseErrorMessage>
</template>

<style scoped></style>
