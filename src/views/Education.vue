<script setup lang="ts">
import { ref } from "vue";
import TabWrapper from "@/components/TabWrapper.vue";
import Tab from "@/components/Tab.vue";
</script>
<template>
  <TabWrapper>
    <Tab title="tab1">
      <div class="col-md-6">
        
      </div>
      <div class="col-md-6"></div>
    </Tab>
    <Tab title="tab2">Title from Tab 2</Tab>
  </TabWrapper>
</template>

<style scoped></style>
