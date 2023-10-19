// https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    '/github/**': { proxy: 'https://api.github.com/**' },
    '**': { prerender: true, cors: true },
  },
})
