<script>
import { store } from '../store';
export default {
    props: {
        headerLanguages: Array,
        headerItems: Array,
    },
    data() {
        return {
            store,
        };
    },
    methods: {},
}
</script>

<template>
        <div class="nav-bar container py-2">
            <!-- Logo -->
            <img src="../assets/images/MasterStudy_logo.svg" alt="">
            <div class="nav-items">

            </div>
        </div>
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;


</style>