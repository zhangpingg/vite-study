import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser  from '@rollup/plugin-terser'

/** 此处是为了能使用 VSCode 的类型提示
 *  @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ["src/index.js", "src/util.js"],   // 入口
  // 输出一个产物
  // output: {
  //   dir: "dist/es",         // 产物输出目录
  //   format: "esm",          // 产物格式
  // },
  // 输出多个产物
  output: [
    {
      dir: "dist/es", 
      format: "esm", 
    },
    {
      dir: "dist/cjs", 
      format: "cjs", 
    },
  ],
  plugins: [resolve(), commonjs(), terser()],
};

export default buildOptions;