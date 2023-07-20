// 1) rollup.rollup完成一次性打包
const rollup = require("rollup");     // 需要去掉package.json 中的 "type": "module",这里才不会报错

const inputOptions = {                // 常用 inputOptions 配置
  input: "./src/index.js",
  external: [],
  plugins:[]
};
const outputOptionsList = [           // 常用 outputOptions 配置
  {
    dir: 'dist/es',
    entryFileNames: `[name].[hash].js`,
    chunkFileNames: 'chunk-[hash].js',
    assetFileNames: 'assets/[name]-[hash][extname]',
    format: 'es',
    sourcemap: true,
    globals: {
      lodash: '_'
    }
  }
  // 省略其它的输出配置
];

async function build() {
  let bundle;
  let buildFailed = false;
  try {
    // 1. 调用 rollup.rollup 生成 bundle 对象
    bundle = await rollup.rollup(inputOptions);
    for (const outputOptions of outputOptionsList) {
      // 2. 拿到 bundle 对象，根据每一份输出配置，调用 generate 和 write 方法分别生成和写入产物
      const { output } = await bundle.generate(outputOptions);
      await bundle.write(outputOptions);
    }
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }
  if (bundle) {
    await bundle.close();               // 最后调用 bundle.close 方法结束打包
  }
  process.exit(buildFailed ? 1 : 0);    // 退出当前进程
}

build();
