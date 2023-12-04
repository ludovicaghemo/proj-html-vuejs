<script>
//importare componenti
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppNavBar from "./components/AppNavBar.vue";
import { store } from "./store.js";

//dichiarare componenti
export default {
  data() {
    return {
      store: store,
      headerCourses: [
        "Courses",
        "Zoom",
        "Pages",
        "Bundles",
        "Course Formats",
        "Add Course",
        "Demos"
      ]
    };
  },
  created() {
  },
  components: { AppHeader, AppMain, AppNavBar },
  methods: {
  },
};
</script>

<template>
  <!-- utilizzare componenti-->
  <AppHeader :headerItems="headerCourses"/>
  <AppNavBar />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"
</style>
