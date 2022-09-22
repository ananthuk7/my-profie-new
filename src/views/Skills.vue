<script setup lang="ts">
import Card from "@/components/Cards.vue";
import imgUrl from "@/assets/images/web-bg.png";
import { titleChange } from "@/composables/useTitle";
import gsap from "gsap";
const skillDetails = [
  {
    imgUrl: imgUrl,
    title: "Web Developer",
  },
];
titleChange("Skills");
const beforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(150px)";
};
const enter = (el: any, done: any): void => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: el.dataset.index * 0.2 + 0.1,
    onComplete: done,
  });
};
</script>
<template>
  <div class="pd-screen skills">
    <transition appear name="skill">
      <h3 class="text-5xl md:text-7xl font-bold text-center mb-10 uppercase">
        What I Do
      </h3>
    </transition>
    <div class="row">
      <transition-group
        tag="div"
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        class="col col-sm-6 col-md-4"
      >
        <Card
          :img="data.imgUrl"
          :title="data.title"
          v-for="(data, index) in skillDetails"
          :data-index="index"
          key="index"
        />
      </transition-group>
    </div>
  </div>
</template>
<style scoped>
.skill-enter-from {
  opacity: 0;
  transform: translateY(-200px);
  color: white;
}
.skill-enter-active {
  transition: all 1s ease-in;
}
.skill-leave-to {
  opacity: 1;
  color: #000;
  transform: translateX(0);
}

.skill-leave-active {
  transition: 1s ease-out;
}
</style>
