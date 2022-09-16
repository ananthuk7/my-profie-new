<script setup lang="ts">
import Card from "@/components/Cards.vue";
const url: string = "/src/assets/images/web-bg.png";
</script>
<template>
  <div class="pd-screen skills">
    <h3 class="text-5xl md:text-7xl font-bold text-center mb-10">What I Do</h3>
    <div class="row">
      <div class="col col-sm-6 col-md-4">
        <!-- <div class="card w-full sm:w-11/12 mx-auto"> -->
        <Card :img="url" title="Web Developer" />
        <!-- <div class="card__image">
            <img
              src="../assets/images/web-bg.png"
              alt="web developer"
              class="card__image--top"
            />
          </div>
          <div class="card__description">
            <h3 class="card__heading">Web Developer</h3>
          </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
