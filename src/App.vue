<script>
//importare componenti
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
  components: {},
  methods: {
  },
};
</script>

<template>
  <!-- utilizzare componenti-->
  <h1>Help</h1>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css"
</style>
