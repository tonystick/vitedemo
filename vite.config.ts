import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import deployTimeIndexHtmlPlugin from './plugins/deloyTimeIndexHtml';

const pathSrc = path.resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${pathSrc}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/element/index.scss" as *;',
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',

      /**
       * custom insert position
       * @default: body-last
       */
      inject: 'body-last',

      /**
       * custom dom id
       * @default: __svg__icons__dom__
       */
      customDomId: '__svg__icons__dom__',
    }),
    deployTimeIndexHtmlPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id, api) => {
          // console.log(id);
          if (id.includes('element-plus')) {
            return 'element-plus';
          }
          if (id.includes('/node_modules/lodash-es')) {
            return 'lodash-es';
          }
          return 'vendor';
        },
      },
    },
  },
});
