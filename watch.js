// 2)监听文件更改，然后自动打包
const rollup = require('rollup');   // 需要去掉package.json 中的 "type": "module",这里才不会报错

const watcher = rollup.watch({
  input: './src/index.js',
  output: [
    {
      dir: 'dist/es',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  watch: {
    exclude: ['node_modules/**'],
    include: ['src/**'],
  },
})

watcher.on('change', (id) => {
  console.log('发生变化的模块id: ', id);
})
watcher.on('restart', () => {
  console.log('重新构建...');
})
watcher.on('event', (e) => {
  if(e.code === 'BUNDLE_END'){
    console.log('打包信息: ', e);
  }
})