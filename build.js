// (1)build.js (打包)
// 打包命令：node build
// 功能：build
const { build, buildSync, serve } = require("esbuild");

async function runBuild() {
  // 异步方法，返回一个 Promise
  const result = await build({
    absWorkingDir: process.cwd(),     // 当前项目根目录
    entryPoints: ["./src/index.jsx"], // 入口文件列表
    outdir: "dist",                   // 打包产物目录
    bundle: true,                     // 是否需要打包，一般设为 true
    format: "esm",                    // 模块格式，包括`esm`、`commonjs`和`iife`
    external: [],                     // 需要排除打包的依赖列表
    splitting: true,                  // 是否开启自动拆包
    sourcemap: true,                  // 是否生成 SourceMap 文件
    metafile: true,                   // 是否生成打包的元信息文件
    minify: false,                    // 是否进行代码压缩
    // watch: false,   // 是否开启 watch 模式，在 watch 模式下代码变动则会触发重新打包（需要注释，不然会打包报错）
    write: true,                       // 是否将产物写入磁盘
    // Esbuild 内置了一系列的 loader，包括 base64、binary、css、dataurl、file、js(x)、ts(x)、text、json（针对一些特殊的文件，调用不同的 loader 进行加载）
    loader: {
      '.png': 'base64',
    }
  });
  console.log(result);
}

runBuild();
