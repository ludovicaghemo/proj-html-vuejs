<script>
//importare componenti
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store.js";

//dichiarare componenti
export default {
  data() {
    return {
      store: store
    };
  },
  created() {
  },
  components: { AppHeader },
  methods: {
  },
};
</script>

<template>
  <!-- utilizzare componenti-->
  <AppHeader />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"
</style>
