// https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/': {
      prerender: true,
    },
    '/**': {
      cors: true,
    },
  },
})
