<script setup lang="ts">
import { ref } from "vue";
import TabWrapper from "@/components/TabWrapper.vue";
import Tab from "@/components/Tab.vue";
</script>
<template>
  <TabWrapper class="my-5">
    <Tab title="Education">
      <div class="row">
        <div class="col-md-4"><p class="work__date">Jun,2020-Jun,2020</p></div>
        <div class="col-md-8">
          <div class="work__content">
            <h1 class="work__title">Dots And Cons</h1>
            <h2 class="work__subtitle">Web Developer</h2>
            <p class="work__description">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore autem delectus asperiores quia reprehenderit quas
              inventore? Non, odit ut cupiditate molestias delectus expedita ab
              eos quam sint cum ullam.
            </p>
          </div>
        </div>
        <hr class="border border-x-emerald-900 w-full" />
        <div class="col-md-4"><p class="work__date">Jun,2020-Jun,2020</p></div>
        <div class="col-md-8">
          <div class="work__content">
            <h1 class="work__title">Dots And Cons</h1>
            <h2 class="work__subtitle">Web Developer</h2>
            <p class="work__description">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore autem delectus asperiores quia reprehenderit quas
              inventore? Non, odit ut cupiditate molestias delectus expedita ab
              eos quam sint cum ullam.
            </p>
          </div>
        </div>
      </div>
    </Tab>
    <Tab title="Internship">
      <div class="row">
        <div class="col-md-4"><p class="work__date">Jun,2020-Jun,2020</p></div>
        <div class="col-md-8">
          <div class="work__content">
            <h1 class="work__title">Dots And Cons</h1>
            <h2 class="work__subtitle">Web Developer</h2>
            <p class="work__description">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore autem delectus asperiores quia reprehenderit quas
              inventore? Non, odit ut cupiditate molestias delectus expedita ab
              eos quam sint cum ullam.
            </p>
          </div>
        </div>
        <hr class="border border-x-emerald-900 w-full" />
        <div class="col-md-4"><p class="work__date">Jun,2020-Jun,2020</p></div>
        <div class="col-md-8">
          <div class="work__content">
            <h1 class="work__title">Dots And Cons</h1>
            <h2 class="work__subtitle">Web Developer</h2>
            <p class="work__description">
              - Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              tempore autem delectus asperiores quia reprehenderit quas
              inventore? Non, odit ut cupiditate molestias delectus expedita ab
              eos quam sint cum ullam.
            </p>
          </div>
        </div>
      </div>
    </Tab>
  </TabWrapper>
</template>

<style scoped></style>
