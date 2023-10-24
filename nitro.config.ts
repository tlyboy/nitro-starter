// https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/github/**': { proxy: 'https://api.github.com/**' },
    '/bing/**': { proxy: 'https://www.bing.com/**' },
    '/**': { prerender: true, cors: true },
  },
})
