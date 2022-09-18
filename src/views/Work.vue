<script setup lang="ts">
import WorkCard from "@/components/WorkCard.vue";
interface WorkDetails {
  period: string;
  company: string;
  designation: string;
  description?: string[];
}
const workData: WorkDetails[] = [
  {
    period: "Jun,2022 - present",
    company: "PanApps Inc",
    designation: "Software Developer",
    description: [
      "- Develop, test and implement new software programs with vue js and dotnet",
      "- Clearly and regularly communicate with management and technical support colleagues",
      "- Design and update software database. This includes, but is not limited to: Software Applications, Web Sites, Data Communication Processes and User Interfaces",
      "- Analyze user requirements and convert requirements to design documents",
      "- Work with experienced team members to conduct root cause analysis of issues, review new and existing code and/or perform unit testing",
    ],
  },
  {
    period: "Sep,2021 - Feb,2022",
    company: "Torc Infotech",
    designation: "Assosiate Software Developer",
    description: [
      "- Developed web pages using html css bootstrap javascript  react and django",
      "- Implemented Client side validations using JavaScript",
      "- identifies the requirements of the clients and discusses it with the development manager",
      "-  monitors software development process and supports the team members in all phases of the project",
      "- assists the clients in the installation, maintenance, troubleshooting and updating the software.",
    ],
  },
  {
    period: "Sep,2020 - Mar,2021",
    company: "Strokx Technologies",
    designation: "Frondend Developer",
    description: [
      "- Create web application front end as per design comps and information architecture",
      " - Work with other developers to ensure that the website is functional and visually appealing",
      " - Collect feedback from design and technical staff on website development needs.",
      "- Plan the layout of the website",
      "- Ensure that the website is optimized for various devices",
    ],
  },
];
</script>

<template>
  <div id="work " class="work pd-screen pt-12">
    <h1 class="text-6xl font-bold uppercase mb-0 md:mb-12">Work</h1>
    <WorkCard v-for="work in workData" :work="work" />
  </div>
</template>

<style scoped></style>
