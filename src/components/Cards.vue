<script setup lang="ts">
defineProps<{
  img: string;
  title: string;
}>();
</script>
<template>
  <div class="card w-full sm:w-11/12 mx-auto">
    <div class="card__image">
      <img
        :src="img"
        alt="web developer"
        class="card__image--top"
        loading="lazy"
      />
    </div>
    <div class="card__description">
      <h3 class="card__heading">{{ title }}</h3>
    </div>
  </div>
</template>
