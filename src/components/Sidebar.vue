<script setup lang="ts">
import Icons from "@/components/icons/Icon.vue";
</script>

<template>
  <div class="sidebar__inside bg-black">
    <div class="sidebar__link">
      <RouterLink to="/">
        <Icons id="icon-home" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <RouterLink to="/about">
        <Icons id="icon-user-o" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <RouterLink to="/skill">
        <Icons id="icon-document-code" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <RouterLink to="/work">
        <Icons id="icon-portfolio" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <RouterLink to="/qualification">
        <Icons id="icon-study" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <RouterLink to="/portfolio">
        <Icons id="icon-gallery" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <RouterLink to="/contact">
        <Icons id="icon-contacts" class="icons fill-white h-10 w-10" />
      </RouterLink>
      <!-- <div class="wrapper">

      </div> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
// .wrapper {
//   height:5rem;
//   width:5rem;
//   border:5rem;
//   background-color:rgb(48, 223, 71);
//   position: absolute;
//   top: 10%;
//   left: 60%;
//   border-radius: 50%;
//   z-index: -1;
//   display:none;
// }
a.router-link-exact-active .icons {
  fill: aqua;
}
// a.router-link-exact-active .wrapper{
//   display:block;
// }
</style>
