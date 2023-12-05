<script>
import { store } from '../store';
export default {
    props: {
        contactFooter: Object,
        aboutFooter: Object,
        pagesFooter: Object,
    },
    data() {
        return {
            store,
            footerBlog: [
                {
                    img: 'photo-1517520287167-4bbf64a00d66-69x69.jpeg',
                    text: 'Our main target is to "Developing Yourself as a Leader"',
                    date: "August 9, 2018"
                },
                {
                    img: 'photo-1490376840453-5f616fbebe5b-69x69.jpeg',
                    text: "Those other college expenses you aren\'t thinking about",
                    date: "June 3,2015",
                },
            ]
        };
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    },
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="my-card">
                        <h5>{{ aboutFooter.title }}</h5>
                        <div class="about">
                            <p>{{ aboutFooter.text }}</p>
                        </div>
                        <div class="d-flex">
                            <a href=""><i class="fa-brands fa-facebook me-3 gray"></i></a>
                            <a href=""><i class="fa-brands fa-twitter me-3 gray"></i></a>
                            <a href=""><i class="fa-brands fa-instagram gray"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="my-card">
                        <h5>{{ contactFooter.title }}</h5>
                        <ul class="contact list-unstyled">
                            <li>{{ contactFooter.address }}</li>
                            <li>{{ contactFooter.city }}</li>
                            <li>{{ contactFooter.tel }}</li>
                            <li>{{ contactFooter.fax }}</li>
                            <li>{{ contactFooter.mail }}</li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="my-card">
                        <h5>{{ pagesFooter.title }}</h5>
                        <div class="row d-flex">
                            <div class="col-6">
                                <ul class="pages">
                                    <li>{{ pagesFooter.blog }}</li>
                                    <li>{{ pagesFooter.home }}</li>
                                    <li>{{ pagesFooter.shortcodes }}</li>
                                </ul>
                            </div>
                            <div class="col-6">
                                <ul class="pages">
                                    <li>{{ pagesFooter.courses }}</li>
                                    <li>{{ pagesFooter.membership }}</li>
                                    <li>{{ pagesFooter.typography }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="my-card">
                        <h5>Blog</h5>
                        <ul class="list-unstyled gray">
                            <li class="d-flex align-items-center" v-for="item in footerBlog" :key="item.text">
                                <img :src="getImagePath(item.img)" alt="" class="mx-2 my-2">
                                <div>
                                    <p><strong>{{ item.text }}</strong></p>
                                    <p>{{ item.date }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use "../style/general" as *;
@use "../style/partials/variables" as *;

.card {
    border: none;
}

ul {
    list-style-type: disc;
}

.gray {
    color: $grey-text-color;
}

p {
    font-size: .8rem;
}
</style>