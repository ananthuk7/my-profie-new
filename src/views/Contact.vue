<script setup lang="ts">
import BaseInput from "@/components/form/BaseInput.vue";
import BaseTextArea from "@/components/form/BaseTextArea.vue";
import { ref } from "vue";
const value = ref<string>("");
</script>
<template>
  <div class="main">
    <form>
      <BaseInput v-model="value" type="text" class="border border-zinc-900" />
      <div class="row">
        <div class="col-md-6">
          <BaseInput
            v-model="value"
            type="text"
            class="border border-zinc-900"
          />
        </div>
        <div class="col-md-6">
          <BaseInput
            v-model="value"
            type="text"
            class="border border-zinc-900"
          />
        </div>
      </div>
      <BaseInput v-model="value" type="text" class="border border-zinc-900" />
      <BaseTextArea v-model="value" />
    </form>
  </div>
</template>

<style scoped>
.main {
  background: #e3dede;
  height: 100vh;
  padding: 10rem;
}
form {
  width: 50%;
  margin: 0 auto;
  border-radius: 0px;
  background: #e3dede;
  box-shadow: 5px 5px 10px #bfbaba, -5px -5px 10px #ffffff;
}
</style>
