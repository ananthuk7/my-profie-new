<script setup lang="ts">
import Card from "@/components/Cards.vue";
import imgUrl from "@/assets/images/web-bg.png";
</script>
<template>
  <div class="pd-screen skills">
    <h3 class="text-5xl md:text-7xl font-bold text-center mb-10">What I Do</h3>
    <div class="row">
      <div class="col col-sm-6 col-md-4">
        <Card :img="imgUrl" title="Web Developer" />
      </div>
    </div>
  </div>
</template>
