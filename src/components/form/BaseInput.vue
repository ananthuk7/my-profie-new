<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number;
}>();
defineEmits<{
  (e: "update:modelValue", val: string | number): void;
}>();
</script>
<template>
  <input
    name=""
    id=""
    v-bind="{ ...$attrs, onInput : $event => {$emit('update:modelValue', ($event.target as HTMLInputElement).value)}}"
    :value="modelValue"
  />
</template>

<style scoped></style>
