// (4)Esbuild 插件
// 效果：应用了 env 插件后，构建时将会被替换成 process.env 对象

// const { build } = require("esbuild");

let envPlugin = {
  name: 'env',
  setup(build) {
    // 路径解析
    build.onResolve({ filter: /^env$/ }, args => ({
      path: args.path,
      namespace: 'env-ns',
    }))
    // 模块内容加载
    build.onLoad({ filter: /.*/, namespace: 'env-ns' }, () => ({
      contents: JSON.stringify(process.env),
      loader: 'json',
    }))
  },
}

require('esbuild').build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outfile: 'out.js',
  // 应用插件
  plugins: [envPlugin],
}).catch(() => process.exit(1))
