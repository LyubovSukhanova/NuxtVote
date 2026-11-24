// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiurl: "",
        },
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon/module",
        "@nuxt/image",
        "@pinia/nuxt",
        "pinia-plugin-persistedstate/nuxt",
    ],
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/styles/main.css"],
    icon: {
        customCollections: [
            {
                prefix: "icons",
                dir: "./app/assets/icons",
            },
        ],
    },
});
