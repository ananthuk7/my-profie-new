<script setup lang="ts">
import icons from "@/assets/icons.svg";
export interface Props {
  id: string;
}
const { id } = defineProps<Props>();
</script>
<template>
  <svg>
    <use :xlink:href="`${icons}#${id}`"></use>
  </svg>
</template>
