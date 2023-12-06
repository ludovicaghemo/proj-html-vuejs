<script>
import { store } from '../store';
import AppBusinessOffer from './AppBusinessOffer.vue';
import AppCourses from './AppCourses.vue';
import AppHero from './AppHero.vue';
import AppLimitlessLearning from './AppLimitlessLearning.vue';
import AppStats from './AppStats.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    components: { AppHero, AppCourses, AppBusinessOffer, AppLimitlessLearning, AppStats }
}
</script>

<template>
    <AppHero />
    <AppCourses />
    <AppLimitlessLearning />
    <AppStats /> 
    <AppBusinessOffer />
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;
</style>