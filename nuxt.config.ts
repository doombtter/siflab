export default defineNuxtConfig({
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ko' },
      title: 'Siflab — Workshop of quiet craft',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'siflab은 소프트웨어를 만드는 작은 공방입니다. Named after Sif, Norse goddess of golden harvest.'
        },
        { name: 'theme-color', content: '#0d1117' },
        { name: 'ows-verify', content: '9a4a37ded9894344' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=JetBrains+Mono:wght@400;500&family=Noto+Serif+KR:wght@300;400;500&display=swap'
        }
      ]
    }
  }
})
