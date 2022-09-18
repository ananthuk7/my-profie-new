<script setup lang="ts">
import { ref } from "vue";
import TabWrapper from "@/components/TabWrapper.vue";
import Tab from "@/components/Tab.vue";
import WorkCard from "@/components/WorkCard.vue";
interface WorkDetails {
  period: string;
  company: string;
  designation: string;
  description?: string[];
}
const internShip: WorkDetails = {
  period: "May,2021 - Aug,2021",
  company: "Luminar Technolab",
  designation: "Python-Django",
  description: [
    "- Introduction to Python, Python & PyCharm Installation, Identifiers, Data types, Print&Input Functions, Operators, Conditional Staterents, Looping, Control Statements, String Manipulation Functions, Pattern Printing, Set, List, Tuple List Comprehension, Dictionaries, Files Modules&Packages",
    "- OOPS Concepts, Regular Expressions, CGI, DataBase, MySQL,Exception Handling, Functional Programming , Multithreading, Python to DB.",
    "- Creating Virtual Environment, Django Installation, Creating Project and App, Understanding Significance of Project Files, Django Architecture, Writing Views, urls, Templates, Models, ORM Queries, Template Inheritance, Django Static Files...",
    "- Environment Setup and Installation, Http Methods (Get, Post, Put, Patch, Delete ), Post Man / Thunder Client, Serializers(Model Serializers, Serializer Validation, Serializer Relationship), Views(API View, Mixins, Viewsets),Authentication(Basic Authentication, Session Authentication, Token Authentication, JWT), Django Filters",
  ],
};
const educationDetails: WorkDetails[] = [
  {
    period: "May,2016 - Sep,2020",
    company: "Mahaghuru Institute of Technology",
    designation: "Bachelor's degree, Computer Science",
    description: [
      "- Established in the year 2009, MAHAGURU INSTITUTE OF TECHNOLOGY (Formerly SVNCE), has been successful in producing distinct engineers over a decade. Since its inception our main aim is to deliver quality education and give our students the right exposure by maintaining international standards of technical education.",
    ],
  },
  {
    period: "Jun,2014 - Jun,2016",
    company: "BJSM Madathil",
    designation: "Higher Secondary",
    description: [
      "an aided school in Thazhava North, Karunagapally, Kollam district, Kerala, India, which was founded by V.Vasudevan Pillai in 1957 . The school, which started as an Upper Primary school, was upgraded to High school in 1979. Vocational Higher Secondary courses were introduced in the school from 1995.",
    ],
  },
];
</script>
<template>
  <div class="pd-screen">
    <TabWrapper class="my-5">
      <Tab title="Education">
        <WorkCard v-for="edu in educationDetails" :work="edu" />
      </Tab>
      <Tab title="Internship">
        <WorkCard :work="internShip" />
      </Tab>
    </TabWrapper>
  </div>
</template>

<style scoped></style>
