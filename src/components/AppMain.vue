<script>
import { store } from '../store';
import AppHero from './AppHero.vue';
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    components: { AppHero }
}
</script>

<template>
    <AppHero />
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;
</style>