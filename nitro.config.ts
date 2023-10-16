// https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/*': { prerender: true },
    '/github/**': { proxy: 'https://api.github.com/**', cors: true },
    '/**': { cors: true },
  },
})
