<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
        }
    },
}

</script>

<template>
    <div class="large-container d-flex p-5 justify-content-center">
        <div class="container d-flex justify-content-start">
            <div class="row">
                <div class="col-5">
                    <div class="text">
                        <h2 class="mb-4">Limitless learning, more possibilities</h2>
                        <p class="mb-4">Online courses open the opportunity for learning to almost anyone, regardless of
                            their scheduling commitment</p>
                        <button class="signup-btn btn btn-primary btn-large rounded-pill">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;

.large-container {
    background-image: url(../assets/images/Untitled-1-1-1-1-1.png);
    background-size: cover;

    .row {
        align-items: center;
        justify-content: flex-start;

        h1 {
            font-size: 2rem;
            letter-spacing: 3px;
        }

        p {
            font-size: 1rem;
        }
    }
}
</style>