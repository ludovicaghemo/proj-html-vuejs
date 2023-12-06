<script>
import AppHeroCard from './AppHeroCard.vue';

export default {
    data() {
        return {
            img: "hero.png"
        };
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    },
    components: { AppHeroCard }
}
</script>

<template>
    <div class="container">
        <div class="row hero">
            <div class="col-6">
                <h1 class="mb-4">Start Investing in You</h1>
                <p class="subtitle mb-5">With over 1200 courses in 18 subjects, you're guaranteed to find something that's
                    right for you.</p>
                <button class="btn btn-primary btn-lg rounded-pill px-3">JOIN FOR FREE</button>
            </div>
            <div class="col-6 hero-image">
                <img :src="getImagePath(img)" alt="">
            </div>
        </div>
    </div>
    <AppHeroCard />
</template>

<style scoped lang="scss">
@use "../style/general" as *;

.container {
    margin: 7rem auto;

    h1 {
        font-size: 4rem;
    }

    .subtitle {
        font-size: 1.5rem
    }
}</style>