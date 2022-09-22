<script setup lang="ts">
import { useRouter } from "vue-router";
import { titleChange } from "@/composables/useTitle";
import { ref, type Ref } from "vue";

titleChange("Home");
enum TypedText {
  TYPING_SPEED = 100,
  START_INDEX = 0,
  NEW_TEXT_SPEED = 1100,
}

const router = useRouter();
const characterArray: Ref<string[]> = ref(["Web Developer"]);
const charIndex: Ref<number> = ref(0);
const charArrayIndex: Ref<number> = ref(0);
const typedText: Ref<string> = ref("");
/**
 *@description A recursive function that is used to type the text in the home page.
 *@returns void
 */
const addTypedText = (): void => {
  if (charIndex.value < characterArray.value[charArrayIndex.value].length) {
    typedText.value += characterArray.value[charArrayIndex.value].charAt(
      charIndex.value
    );
    charIndex.value++;
    setTimeout(addTypedText, TypedText.TYPING_SPEED);
  } else {
    setTimeout(removeTypedText, TypedText.TYPING_SPEED);
  }
};
/**
 *@description recursive function that is used to remove the text that is typed in the home page.
 *@returns void
 */
const removeTypedText = (): void => {
  if (charIndex.value > TypedText.START_INDEX) {
    charIndex.value--;
    typedText.value = typedText.value.substring(
      TypedText.START_INDEX,
      charIndex.value
    );
    setTimeout(removeTypedText, TypedText.TYPING_SPEED);
  } else {
    charArrayIndex.value++;
    if (charArrayIndex.value >= characterArray.value.length)
      charArrayIndex.value = TypedText.START_INDEX;
    setTimeout(addTypedText, TypedText.NEW_TEXT_SPEED);
  }
};

addTypedText();

/**
 *@description A function that is called when the user clicks on the Hire Me button. It is using the router to navigate to the contact page.
 *@returns void
 */
function gotoContact(): void {
  router.push({ name: "contact" });
}
</script>

<template>
  <div class="main flex items-center justify-center min-h-screen">
    <div class="main__content">
      <div class="row">
        <div class="col col-lg-4">
          <div class="image__container">
            <img
              src="@/assets/images/ananthu.png"
              alt="profile-image"
              class="image__prop"
            />
          </div>
        </div>
        <div class="col col-lg-8">
          <div
            class="content-wrapper flex items-center justify-center flex-col w-full h-full"
          >
            <div class="content-wrapper__text">
              <h1 class="content-wrapper__text--head1">Ananthu Krishnan</h1>
              <h3 class="content-wrapper__text--head2">
                {{ typedText }}<span>|</span>
              </h3>
            </div>
            <div class="btn__grp mt-12">
              <VueButton
                class="btn border border-zinc-900 hover:bg-zinc-900 hover:text-white transition duration-700 ease-out"
                >Resume</VueButton
              >
              <VueButton
                @click="gotoContact()"
                class="btn border border-zinc-900 hover:bg-zinc-900 hover:text-white ml-0 lg:ml-5 mt-2 lg:mt-0 transition duration-700 ease-out"
                >Hire Me</VueButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
