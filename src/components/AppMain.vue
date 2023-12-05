<script>
import { store } from '../store';
import AppCourses from './AppCourses.vue';
import AppHero from './AppHero.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    components: { AppHero, AppCourses }
}
</script>

<template>
    <AppHero />
    <AppCourses />
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;
</style>