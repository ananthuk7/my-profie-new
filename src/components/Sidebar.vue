<script setup lang="ts">
import Icons from "@/components/icons/Icon.vue";
</script>

<template>
  <div
    class="sidebar w-32 min-h-screen bg-black flex justify-center items-center"
  >
    <div class="flex justify-center items-center flex-col">
      <RouterLink to="/">
        <Icons id="icon-home" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
      <RouterLink to="/about">
        <Icons id="icon-user-o" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
      <RouterLink to="/">
        <Icons id="icon-document-code" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
      <RouterLink to="/">
        <Icons id="icon-portfolio" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
      <RouterLink to="/">
        <Icons id="icon-study" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
      <RouterLink to="/">
        <Icons id="icon-gallery" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
      <RouterLink to="/">
        <Icons id="icon-contacts" class=" icons fill-white h-10 w-10 mb-14" />
      </RouterLink>
    </div>
  </div>
</template>
<style lang="scss">
a.router-link-exact-active .icons{
  fill: aqua;
}
</style>
