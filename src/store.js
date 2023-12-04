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
});