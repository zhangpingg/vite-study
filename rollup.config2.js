// 多入口多出口配置

/** 此处是为了能使用 VSCode 的类型提示
 *  @type { import('rollup').RollupOptions }
 */
const buildIndexOptions = {
  input: ["src/index.js"],     // 入口
  output: [
    {
      dir: "dist/es", 
      format: "esm", 
    }
  ]
};
const buildUtilOptions = {
  input: ["src/util.js"],      // 入口
  output: [
    {
      dir: "dist/cjs", 
      format: "cjs", 
    }
  ]
};

export default [buildIndexOptions, buildUtilOptions];