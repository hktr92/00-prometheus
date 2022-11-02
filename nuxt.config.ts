// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["~/assets/main.scss"],
    app: {
        head: {
            link: [
                { rel: 'icon', type: "image/x-icon", href: '/favicon.ico?v2' }
            ]
        },
    },
    typescript: {
        shim: false
    },
    nitro: {
        preset: 'aws-lambda',
        serveStatic: true
    }
})
