<script>
import { store } from '../store';
import NewsletterBanner from './NewsletterBanner.vue';

export default {
    data() {
        return {
            store: store,
        };
    },
    components: { NewsletterBanner }
}
</script>

<template>
    <div class="large-container my-5">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-5 text-center">
                    <h2 class="pb-1">We are Proud</h2>
                    <p>Certificate courses are instructed by highly educated and qualified instructor who hold doctoral and
                        master's level degrees</p>
                </div>
            </div>
        </div>
        <div class="background-row">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="stats-data d-flex justify-content-between align-items-center flex-column p-4"
                    v-for=" item in store.statsData">
                    <p class="value">{{ item.value }}</p>
                    <p class="type">{{ item.type }}</p>
                </div>
            </div>
        </div>
        <NewsletterBanner />
    </div>
   
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/general" as *;

.large-container {
    background-color: $light-gray-bg-color;
    padding-top: 5rem;

    h2 {
        font-size: 4rem;
        font-weight: 300;
    }

    p {
        font-weight: 300;
    }

    .background-row {
        background-image: url(../assets/images/we_proud.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .col-12 {
        padding-bottom: 7rem;

        .stats-data {
            border-right: 1px solid $grey-border-color;

            &:last-child {
                border-right: none;
            }

            .value {
                font-size: 5rem;
                font-weight: 200;
            }
        }
    }
}
</style>