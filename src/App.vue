<script>
//importare componenti
import AppFooter from "./components/AppFooter.vue";
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
      ],
      footerContact: {
        title: 'Contact',
        address: 'USA, California 20, First Avenue,',
        city: 'California',
        tel: 'Tel.: +39 324 212 321 32',
        fax: 'Fax: +39 324 212 321 32',
        mail: 'info@masterstudy.com'
      },
      footerAbout: {
        title: 'About',
        text: 'Masterstudy in Education WordPress theme featured by Learning Management System (LMS) for online education. Developed by StylemixThemes'
      },
      footerPages: {
        title: 'Pages',
        blog: 'Blog',
        home: 'Home',
        shortcodes: 'Shortcodes',
        courses: 'Courses',
        membership: 'Membership',
        typography: 'Typography'
      },
    };
  },
  created() {
  },
  components: { AppHeader, AppMain, AppNavBar, AppFooter },
  methods: {
  },
};
</script>

<template>
  <!-- utilizzare componenti-->
  <AppHeader :headerItems="headerCourses" />
  <AppNavBar />
  <AppMain />
  <AppFooter :aboutFooter="footerAbout" :contactFooter="footerContact" :pagesFooter="footerPages"/>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"
</style>
