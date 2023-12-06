<script>
import { store } from '../store';
import AppBusinessOffer from './AppBusinessOffer.vue';
import AppCourses from './AppCourses.vue';
import AppHero from './AppHero.vue';
import AppLimitlessLearning from './AppLimitlessLearning.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    components: { AppHero, AppCourses, AppBusinessOffer, AppLimitlessLearning }
}
</script>

<template>
    <AppHero />
    <AppCourses />
    <AppLimitlessLearning />
    <AppBusinessOffer />
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;
</style>