<script setup lang="ts">
import { titleChange } from "@/composables/useTitle";
import { useField, useForm } from "vee-validate";
import { object, string, number } from "yup";
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import { useAlertStore } from "@/stores/Alert";
import { useRouter } from "vue-router";
titleChange("Contact");
const alert = useAlertStore();
const router = useRouter();
const form = ref<HTMLFormElement | string>("");

const validationSchema = object({
  from_name: string().required("from_name is required"),
  email: string().required("email is required").email("email is incorrect"),
  contact: number().positive().required("number required"),
  subject: string().required(),
  message: string().required(),
});

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: from_name } = useField<string>("from_name");
const { value: email } = useField<string>("email");
const { value: contact } = useField<number>("contact");
const { value: subject } = useField<string>("subject");
const { value: message } = useField<string>("message");

const submit = handleSubmit((values) => {
  emailjs
    .sendForm(
      `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
      `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
      form.value,
      `${import.meta.env.VITE_EMAIL_JS_APIKEY}`
    )
    .then(
      (result) => {
        alert.success("Your Email send successfully");
        router.push({ name: "home" });
      },
      (error) => {
        alert.error(error.text);
      }
    );
});
</script>
<template>
  <div class="contact">
    <transition name="head" appear mode="in-out">
      <h3 class="text-center neo-contact">Contact</h3>
    </transition>
    <transition name="form" appear mode="in-out">
      <form class="form" ref="form" @submit.prevent="submit">
        <div class="form__group mt-5">
          <BaseInput
            v-model="from_name"
            name="from_name"
            placeholder="Full Name"
            type="text"
            class="form__input h-20"
            :error="errors.from_name"
          />
        </div>
        <div class="row mt-5">
          <div class="col col-md-6 pr-0 md:pr-5">
            <BaseInput
              name="email"
              v-model="email"
              type="text"
              class="form__input h-20"
              placeholder="Email"
              :error="errors.email"
            />
          </div>
          <div class="col col-md-6 pl-0 md:pl-5">
            <BaseInput
              name="contact"
              v-model="contact"
              type="number"
              class="form__input h-20"
              placeholder="Contact"
              :error="errors.contact"
            />
          </div>
        </div>
        <div class="form__group mt-5">
          <BaseInput
            name="subject"
            v-model="subject"
            type="text"
            class="form__input h-20"
            placeholder="Subject"
            :error="errors.subject"
          />
        </div>
        <div class="form__group mt-5">
          <BaseTextArea
            name="message"
            v-model="message"
            class="form__input"
            :cols="5"
            :rows="8"
            placeholder="Message"
            :error="errors.message"
          />
        </div>
        <VueButton type="submit" class="btn btn__submit block mx-auto my-8"
          >Submit</VueButton
        >
      </form>
    </transition>
  </div>
</template>
<style scoped>
.form-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.form-enter-active {
  transition: all 1s ease-in;
}
.form-leave-to {
  opacity: 1;
  transform: translateX(0);
}

.form-leave-active {
  transition: 1s ease-out;
}
.head-enter-from {
  opacity: 0;
  transform: translateX(-200px);
}
.head-enter-active {
  transition: all 1s ease-in;
}
.head-leave-to {
  opacity: 1;
  transform: translateX(0);
}

.head-leave-active {
  transition: 1s ease-out;
}
</style>
