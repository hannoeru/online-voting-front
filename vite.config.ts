import path from 'path'
import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'
import { VitePWA } from 'vite-plugin-pwa'

const cssLangs = '\\.(css|less|sass|scss|styl|stylus|postcss)($|\\?)'
const cssLangRE = new RegExp(cssLangs)
const cssModuleRE = new RegExp(`\\.module${cssLangs}`)
const directRequestRE = /(\?|&)direct\b/

const isCSSRequest = (request: string) =>
  cssLangRE.test(request) && !directRequestRE.test(request)

const isDirectCSSRequest = (request: string) =>
  cssLangRE.test(request) && directRequestRE.test(request)

let server

const config: UserConfig = {
  alias: {
    '/~/': `${path.resolve(__dirname, 'src')}/`,
  },
  plugins: [
    Vue({
      ssr: !!process.env.SSG,
    }),

    // https://github.com/vamplate/vite-plugin-voie
    Pages({
      extendRoute(route, parent) {
        const hideInAuth = ['/login', '/register']
        if (hideInAuth.includes(route.path)) {
          // Index is unauthenticated.
          return {
            ...route,
            meta: {
              hideNavbar: true,
              hideSearch: true,
            },
          }
        }

        // Augment the route with meta that indicates that the route requires authentication.
        return {
          ...route,
          meta: { auth: true },
        }
      },
      extensions: ['vue', 'md'],
    }),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      // for https://github.com/tailwindlabs/tailwindcss-typography
      wrapperClasses: 'prose prose-sm m-auto',
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: id => id.endsWith('.md'),

      // auto import icons
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons({
      scale: 1.1,
      defaultStyle: 'vertical-align: middle;',
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      manifest: {
        name: 'Online Voting',
        short_name: 'Online Voting',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    {
      name: 'vite-plugin-tailwind-hmr',
      configureServer(_server) {
        server = _server
      },
      transform(css, id) {
        if (!cssLangRE.test(id))
          return

        if (server) {
          if (isDirectCSSRequest(id)) { return css }
          else {
            // server only
            return `${css}\nimport.meta.hot.accept('./tailwind.config.js')`
          }
        }
        return css
      },
    },
  ],
}

export default config
