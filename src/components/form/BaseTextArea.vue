<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number;
  cols?: number;
  rows?: number;
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
  ></textarea>
</template>

<style scoped></style>
