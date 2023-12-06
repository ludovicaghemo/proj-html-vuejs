<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {},
    components: {}
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-8">
            <div class="col d-flex">
                <div class="card">
                    <span><i class="icon fa-solid fa-earth-africa"></i></span>
                    <h4 class="pt-3">Worldwide Recognize</h4>
                    <p>Our online course certificates can be used around the world and also in most popular universities and
                        companies.</p>
                </div>
                <div class="card">
                    <span><i class="icon fa-solid fa-display"></i></span>
                    <h4 class="pt-3">Mostly Online Learning (sd)</h4>
                    <p>Masterstudy online certificates can be obtained in a range of specialized areas and tipically take
                        about a year to complete.</p>
                </div>
                <div class="card">
                    <span><i class="icon fa-solid fa-calendar-check"></i></span>
                    <h4 class="pt-3">Graduate in as little as 1 Year</h4>
                    <p>Online post-graduate certificates are a popular way to develop your professional qualifications of
                        Masterstudy</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;

.container {
    margin: 0 auto;

    .card {
        background-color: $light-blue-bg-color;
        margin-right: 2rem;
        padding: 3rem;
        border: none;
        border-radius: 0;

        .icon {
            font-size: 3rem;
            color: blue;
        }
    }
}
</style>