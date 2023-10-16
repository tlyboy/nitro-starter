// https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/**': { prerender: true, cors: true },
    '/github/**': { prerender: true, proxy: 'https://api.github.com/**', cors: true },
  },
})
