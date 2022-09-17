<script setup lang="ts">
export interface WorkDetails {
  period: string;
  company: string;
  designation: string;
  description?: string[];
}
export interface Props {
  work: WorkDetails;
}
const props = defineProps<Props>();
</script>

<template>
  <div class="work__card">
    <div class="row">
      <div class="col-md-4 col-lg-3">
        <p class="work__date">{{ props.work?.period }}</p>
      </div>
      <div class="col-md-8 col-lg-9">
        <div class="work__content">
          <h1 class="work__title">{{ props.work?.company }}</h1>
          <h2 class="work__subtitle">{{ props.work?.designation }}</h2>
          <ul v-if="props.work?.description">
            <li
              class="work__list"
              v-for="work in props.work?.description"
              :key="work"
            >
              {{ work }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
