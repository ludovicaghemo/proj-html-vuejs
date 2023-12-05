import { reactive, } from "vue";

export const store = reactive({
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
    // characteristicsCards: [
    //     {
    //         font-awesome-icon: "<i class='icon fa-solid fa-earth-africa'></i>",
    //         card-title: 'Worldwide Recognize',
    //         card-text: 'Our online course certificates can be used around the world and also in most popular universities and companies.'
    //     },
    //     {
    //         font-awesome-icon: "<i class='icon fa-solid fa-display'></i>",
    //         card-title: 'Mostly Online Learning (sd)',
    //         card-text: 'Masterstudy online certificates can be obtained in a range of specialized areas and tipically take about a year to complete.'
    //     },
    //     {
    //         font-awesome-icon: "<i class='icon fa-solid fa-calendar-check'></i>",
    //         card-title: 'Graduate in as little as 1 Year',
    //         card-text: 'Online post-graduate certificates are a popular way to develop your professional qualifications of Masterstudy'
    //     },
    // ],
});