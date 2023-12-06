<script>
export default {
    data() {
        return {
            img: [
                "cat_1-770x375.jpg",
                "cat_2-370x155.jpg",
                "cat_3-370x155.jpg",
                "cat_4-370x155.jpg",
                "cat_5-370x155.jpg",
                "cat_6-370x155.jpg",
            ]
        }
    },
    methods: {
        getImagePath(img) {
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row-up d-flex flex-wrap">
            <div class="col-8">
                <div class="card p-2 border-0">
                    <img :src="getImagePath(img[0])">
                    <div class="course d-flex justify-content-between">
                        <p>Software Development</p>
                        <p class="courses-number">5 Courses</p>
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex flex-column justify-content-between">
                <div class="card p-2 border-0">
                    <img :src="getImagePath(img[1])">
                    <div class="course d-flex justify-content-between">
                        <p>Art</p>
                        <p class="courses-number">8 Courses</p>
                    </div>
                </div>
                <div class="card p-2 border-0">
                    <img :src="getImagePath(img[2])">
                    <div class="course d-flex justify-content-between">
                        <p>Material Design</p>
                        <p class="courses-number">5 Courses</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex flex-row flex-wrap">
            <div class="col-4">
                <div class="card p-2 border-0">
                    <img :src="getImagePath(img[4])">
                    <div class="course d-flex justify-content-between">
                        <p>Exercise</p>
                        <p class="courses-number">5 Courses</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-2 border-0">
                    <img :src="getImagePath(img[3])">
                    <div class="course d-flex justify-content-between">
                        <p>Music</p>
                        <p class="courses-number">7 Courses</p>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card p-2 border-0">
                    <img :src="getImagePath(img[5])">
                    <div class="course d-flex justify-content-between">
                        <p>Photography</p>
                        <p class="courses-number">4 Courses</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>  
@use "../style/general" as *;
@use "../style/partials/variables" as *;

    .container {
      margin: 4rem auto;

      .course {

        .courses-number {
            color: $grey-text-color;
        }
      }
    }
</style>