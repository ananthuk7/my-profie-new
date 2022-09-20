<script setup lang="ts">
import bgImf from "@/assets/images/screenshot.png";
import { titleChange } from "@/composables/useTitle";
titleChange("Portfolio");
</script>

<template>
  <div class="portfolio pd-screen" id="portfolio">
    <h1 class="text-6xl uppercase font-bold py-10">Portfolio</h1>
    <div class="row">
      <div class="col col-sm-6 col-lg-4 mt-10 sm:mt-5">
        <div
          class="portfolio__img-container box1"
          @click=""
          :style="{ backgroundImage: `url(${bgImf})` }"
        ></div>
      </div>
      <div class="col col-sm-6 col-lg-4 mt-10 sm:mt-5">
        <div
          @click=""
          class="portfolio__img-container box2"
          :style="{ backgroundImage: `url(${bgImf})` }"
        ></div>
      </div>
      <div class="col col-sm-6 col-lg-4 mt-10 sm:mt-5">
        <div
          @click=""
          class="portfolio__img-container box3"
          :style="{ backgroundImage: `url(${bgImf})` }"
        ></div>
      </div>
    </div>
  </div>
</template>
