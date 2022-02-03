import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteCompression from 'vite-plugin-compression'
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  // 设置资源别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      'utils': path.resolve(__dirname, 'src/utils') // src 路径
    }
  },
  server: {
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值
        target: 'http://101.43.17.174:888',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  },
  // build环境下面去除console.log打印信息
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // 全局样式
        additionalData: '@import "./src/assets/style/main.scss";'
      }
    }
  },
  // 打包根目录
  base: '/h5',
  // publicDir: 'assets',
  // assetsPublicPath: './',
  // sourcemap: true,
  // outputDir:'dist',
  // assetsDir:'static'
})
