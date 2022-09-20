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
      <div class="col-md-4">
        <transition name="card-left" mode="in-out" :appear="true">
          <p class="work__date">{{ props.work?.period }}</p>
        </transition>
      </div>

      <div class="col-md-8">
        <transition name="card-right" mode="in-out" :appear="true">
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
        </transition>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-left-enter-from {
  opacity: 0;
  transform: translateX(-100px);
  backface-visibility: hidden;
}
.card-left-enter-active {
  transition: all 0.45s ease-in;
  transition-delay: 0.5s;
}
.card-left-leave-to {
  opacity: 1;
  transform: translateX(0);
}

.card-left-leave-active {
  transition: 0.45s ease-out;
  transition-delay: 0.5s;
}
.card-right-enter-from {
  opacity: 0;
  transform: translateX(100px);
  backface-visibility: hidden;
}
.card-right-enter-active {
  transition: all 0.45s ease-in;
  transition-delay: 0.5s;
}
.card-right-leave-to {
  opacity: 1;
  transform: translateX(0);
}

.card-right-leave-active {
  transition: 0.45s ease-out;
  transition-delay: 0.5s;
}
</style>
