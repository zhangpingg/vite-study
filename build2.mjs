// (2)build2.js（本地服务）
// 打包命令：node build2.js

// esbuild@0.14.18
// const { build, buildSync, serve } = require("esbuild");

// function runBuild() {
//   serve(
//     {
//       port: 8000,
//       servedir: './dist',       // 静态资源目录
//     },
//     {
//       absWorkingDir: process.cwd(),
//       entryPoints: ["./src/index.jsx"],
//       bundle: true,
//       format: "esm",
//       splitting: true,
//       sourcemap: true,
//       ignoreAnnotations: true,
//       metafile: true,
//     }
//   ).then((server) => {
//     console.log("HTTP Server starts at port", server.port);
//   });
// }

// runBuild();


// esbuild 新版本
// 功能：context
import * as esbuild from 'esbuild'

function runBuild(){
  esbuild.context({
    outdir: './dist',                 // 打包产物目录
    absWorkingDir: process.cwd(),     // 当前项目根目录
    entryPoints: ["./src/index.jsx"], // 入口文件列表
    format: 'esm',                    // 模块格式，包括`esm`、`commonjs`和`iife`
    splitting: true,                  // 是否开启自动拆包
    sourcemap: true,                  // 是否生成 SourceMap 文件
    ignoreAnnotations: true,
    metafile: true,                   // 是否生成打包的元信息文件
  }).then((server) => {
    server.serve({
      servedir: './dist'
    }).then(({host, port}) => {
      console.log(`http server: http://127.0.0.1:${port}`);
    })
  })
}

runBuild();