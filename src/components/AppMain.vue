<script>
import { store } from '../store';
import AppBusinessOffer from './AppBusinessOffer.vue';
import AppCourses from './AppCourses.vue';
import AppHero from './AppHero.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    components: { AppHero, AppCourses, AppBusinessOffer }
}
</script>

<template>
    <AppHero />
    <AppCourses />
    <AppBusinessOffer />
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;
</style>