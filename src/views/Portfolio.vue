<script setup lang="ts">
import bgImf from "@/assets/images/screenshot.png";
import { titleChange } from "@/composables/useTitle";
import gsap from "gsap";
titleChange("Portfolio");
const port = [
  {
    url: bgImf,
  },
  {
    url: bgImf,
  },
  {
    url: bgImf,
  },
];
// A transition hook.
const beforeEnter = (el: any) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(150px)";
};
// A transition hook.
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
  <div class="portfolio pd-screen" id="portfolio">
    <h1 class="text-6xl uppercase font-bold py-10">Portfolio</h1>

    <transition-group
      tag="div"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      class="row"
    >
      <div
        class="col col-sm-6 col-lg-4 mt-10 sm:mt-5"
        v-for="(img, index) in port"
        :data-index="index"
        :key="index"
      >
        <div
          class="portfolio__img-container box1"
          @click=""
          :style="{ backgroundImage: `url(${img.url})` }"
        ></div>
      </div>
    </transition-group>
  </div>
</template>
