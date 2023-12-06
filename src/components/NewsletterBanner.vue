<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
        };
    },
}
</script>

<template>
    <!-- Newsletter Section -->
    <div class="large-container">
        <div class="container">
            <!-- Invite Section -->
            <div class="row justify-content-between">
                <div class="col-6">
                    <h5>Subscribe our newsletter</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                </div>
                <!-- SearchBar -->
                <div class="col-5">
                    <p class="mb-3">YOUR EMAIL ADDRESS</p>
                    <div class="d-flex flex-nowrap">
                        <form class="d-flex align-items-center">
                            <input class="search-bar w-100 form-control" type="search" placeholder="Enter your email"
                                aria-label="Search">
                            <button class="search-btn btn btn-primary" type="submit">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;
@use "../style/general" as *;

.large-container {
    padding: 50px 0;
    background-color: $light-green-bg-color;
    color: white;

    .search-bar {
        border: none;
        border-radius: 0;
        width: 400px;
    }

    .search-btn {
        border-radius: 0;
    }
}
</style>