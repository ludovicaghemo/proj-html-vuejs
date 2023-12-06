<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppNavBar from "./components/AppNavBar.vue";
import { store } from "./store.js";

export default {
  data() {
    return {
      store: store,
      // Header Menu Items
      headerCourses: [
        "Courses",
        "Zoom",
        "Pages",
        "Bundles",
        "Course Formats",
        "Add Course",
        "Demos"
      ],
      // Fontawesome Header Icons
      headerAwesome: [
        'fa-brands fa-twitter',
        'fa-brands fa-instagram',
        'fa-brands fa-behance',
        'fa-brands fa-dribbble',
        'fa-brands fa-flickr',
        'fa-brands fa-git',
        'fa-brands fa-linkedin',
        'fa-brands fa-pinterest'
      ],
      // Footer Contact Section Items
      footerContact: {
        title: 'Contact',
        address: 'USA, California 20, First Avenue,',
        city: 'California',
        tel: 'Tel.: +39 324 212 321 32',
        fax: 'Fax: +39 324 212 321 32',
        mail: 'info@masterstudy.com'
      },
      // Footer About Section Items
      footerAbout: {
        title: 'About',
        text: 'Masterstudy in Education WordPress theme featured by Learning Management System (LMS) for online education. Developed by StylemixThemes'
      },
      // Footer Fontawesome Icons
      footerAwesome: [
        'fa-brands fa-facebook',
        'fa-brands fa-twitter',
        'fa-brands fa-instagram'
      ],
      // Footer Pages Section Items
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
  <AppHeader :headerItems="headerCourses" :headerIcons="headerAwesome" />
  <AppNavBar />
  <AppMain />
  <AppFooter :aboutFooter="footerAbout" :contactFooter="footerContact" :pagesFooter="footerPages" :footerIcons="footerAwesome" />
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
