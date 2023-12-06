<script>
import { store } from '../store';
export default {
    props: {
        headerItems: Array,
        headerIcons: Array,
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
        <div class="container d-flex align-items-center justify-content-between">
            <div class="lang-dropdown-menu">
                <select name="languages" id="languages">
                    <option v-for="language in store.languagesArray" :value="language.value" :key="language">
                        {{ language.language }}
                    </option>
                </select>
            </div>
            <!-- Courses menu voices -->
            <div class="header-right pt-3">
                <ul class="courses">
                    <li v-for="item in headerItems"><a href="">{{ item }}</a></li>
                </ul>

                <!-- Socials -->
                <ul class="socials">
                    <li v-for="icon in headerIcons" :key="icon"><a href=""><i :class="icon"></i></a></li>
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