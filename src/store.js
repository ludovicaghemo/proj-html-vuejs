import { reactive, } from "vue";

export const store = reactive({
    // Header Language Select Options
    languagesArray: [
        {
            language: "English",
            value: "en"
        },
        {
            language: "Italian",
            value: "it"
        },
        {
            language: "Spanish",
            value: "es"
        },
        {
            language: "French",
            value: "fr"
        }
    ],
    // Stats Data Section
    statsData: [
        {
            value: "2000",
            type: "STUDENTS"
        },
        {
            value: "950",
            type: "COURSES"
        },
        {
            value: "1600",
            type: "HOURS VIDEO"
        },
        {
            value: "150",
            type: "COUNTRIES REACHED"
        },
    ],
    // Business Offer Section
    businessOffer: [
        {
            img: 'image_box_1-221x231.png',
            title: 'Become an Instructor',
            text: 'Teach what you love, Masterstudy gives you the tools to create a course.',
            btnText: 'START TEACHING',
        },
        {
            img: 'image_box_2-234x231.png',
            title: 'Setup for Business',
            text: 'Get unlimited access to 2.500 of Udemy\'s top courses for your team.',
            btnText: 'DOING BUSINESS',
        },
    ],
});