<script>
import { store } from '../store';
export default {
    props: {
        headerLanguages: Array,
        headerItems: Array,
    },
    data() {
        return {
            store,
        };
    },
    methods: {},
}
</script>

<template>
    <header>
        <!-- Language dropdwon menu -->
        <div class="container">
            <div class="lang-dropdown-menu">
                <select name="languages" id="languages">
                    <option v-for="language in store.languagesArray" :value="language.value" :key="language">
                        {{ language.language }}
                    </option>
                </select>
            </div>
            <!-- Courses menu voices -->
            <div class="header-right">
                <ul class="courses">
                    <li v-for="item in headerItems"><a href="">{{ item }}</a></li>
                </ul>

                <!-- Socials - WIP -->
                <ul class="socials">
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-behance"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-dribbble"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-flickr"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-git"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-pinterest"></i></a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;

header {
    border-bottom: 1px solid $grey-border-color;
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: $grey-text-color;

        .header-right {
            display: flex;
        }

        // DROPDOWN SELECT MENU
        select {
            border: none;
            color: $grey-text-color;
        }

        ul {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
    }
}
</style>