import { defineConfig, normalizePath } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';
import svgr from 'vite-plugin-svgr';

// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint(), svgr()],
  // css 相关的配置
  css: {
    // CSS Modules配置
    modules: {
      // 一般我们可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中 name 表示当前文件名，local 表示类名
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },
    // 预处理器配置
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    },
    // PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['> 1%', 'last 2 versions'] // 指定目标浏览器
        })
      ]
    }
  },
  resolve: {
    // 别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  }
})
