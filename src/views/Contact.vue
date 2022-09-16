<script setup lang="ts">
import { ref } from "vue";
const value = ref<string>("");
</script>
<template>
  <div class="contact">
    <h3 class="text-center neo-contact">Contact</h3>
    <form class="form">
      <div class="form__group mt-5">
        <BaseInput
          v-model="value"
          placeholder="Full Name"
          type="text"
          class="form__input h-20"
        />
      </div>
      <div class="row mt-5">
        <div class="col col-md-6 pr-0 md:pr-5">
          <BaseInput
            v-model="value"
            type="text"
            class="form__input h-20"
            placeholder="Email"
          />
        </div>
        <div class="col col-md-6 pl-0 md:pl-5">
          <BaseInput
            v-model="value"
            type="text"
            class="form__input h-20"
            placeholder="Contact"
          />
        </div>
      </div>
      <div class="form__group mt-5">
        <BaseInput
          v-model="value"
          type="text"
          class="form__input h-20"
          placeholder="Subject"
        />
      </div>
      <div class="form__group mt-5">
        <BaseTextArea
          v-model="value"
          class="form__input"
          :cols="5"
          :rows="8"
          placeholder="Message"
        />
      </div>
      <VueButton type="submit" class="btn btn__submit block mx-auto my-8"
        >Submit</VueButton
      >
    </form>
  </div>
</template>


