<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    },
    components: {
    },
}
</script>

<template>
    <div class="large-container m-5 p-5">
        <div class="row justify-content-center">
            <div v-for="item in store.businessOffer" class="col-6">
                <div class="card d-flex flex-row rounded-0 p-5">
                    <img :src="getImagePath(item.img)" alt="" class="">
                    <div class="card-text p-4 align-items-start">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.text }}</p>
                        <button class="signup-btn btn btn-primary btn-large rounded-pill">{{ item.btnText }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general" as *;
@use "../style/partials/variables" as *;
</style>