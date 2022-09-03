<script setup lang="ts">
import Button from "@/components/Button.vue";
import { ref } from "vue";
</script>

<template>
  <div class="main flex items-center justify-center min-h-screen">
    <div class="main__content">
      <div class="image__container">
        <img
          src="@/assets/images/ananthu.png"
          alt="profile-image"
          class="image__prop"
        />
      </div>
      <div
        class="content-wrapper flex items-center justify-center flex-col w-full"
      >
        <div class="content-wrapper__text">
          <h1 class="content-wrapper__text--head1">Ananthu Krishnan</h1>
          <h3 class="content-wrapper__text--head2">Web Developer</h3>
        </div>
        <div class="btn-grp mt-12">
          <Button
            class="btn border border-zinc-900 bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 transition duration-700 ease-out"
            >Resume</Button
          >
          <Button
            class="btn border border-zinc-900 hover:bg-zinc-900 hover:text-white ml-5 transition duration-700 ease-out"
            >Hire Me</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>
