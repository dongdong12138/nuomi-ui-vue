// rollup-plugin-esbuild：将 JS/TS 代码转换成高效的 JS，并提供了压缩代码的能力
import esbuild from 'rollup-plugin-esbuild'
// rollup-plugin-vue：用于将 vue 单文件组件转换成 JS 模块，以便在浏览器中使用
import vue from 'rollup-plugin-vue'
// rollup-plugin-scss：用于将 SCSS 转换成 CSS
import scss from 'rollup-plugin-scss'
// sass：用于支持 rollup-plugin-scss 插件
import dartSass from 'sass'
// rollup-plugin-terser：用于对 JS 代码进行压缩和混淆
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/lib/index.ts',
  output: {
    globals: {
      vue: 'Vue'
    },
    name: 'nuomi',
    file: 'dist/lib/nuomi.js',
    format: 'umd',
    plugins: [terser()]
  },
  plugins: [
    scss({ fileName: 'nuomi.css', include: /\.scss$/, sass: dartSass }),
    vue({ include: /\.vue$/ }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
  ],
}
